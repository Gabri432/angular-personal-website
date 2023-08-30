const http = require("http");
const Blog = require("./controllers");

const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
    // /api/todos : GET
    if (req.url === "/api/todos" && req.method === "GET") {
        // get the todos.
        const todos = await new Blog().getAllPosts();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json" });
        // send the data
        res.end(JSON.stringify(todos));
    }

    // /api/todos/:id : GET
    else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "GET") {
        try {
            // get id from url
            const id = req.url.split("/")[3];
            // get todo
            const todo = await new Blog().getPost(id);
            // set the status code and content-type
            res.writeHead(200, { "Content-Type": "application/json" });
            // send the data
            res.end(JSON.stringify(todo));
        } catch (error) {
            // set the status code and content-type
            res.writeHead(404, { "Content-Type": "application/json" });
            // send the error
            res.end(JSON.stringify({ message: error }));
        }
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});