import { BlogPost } from "../models/blogPost";

export const blogs: Array<BlogPost> = [
    {
      id: 1,
      title: "This is my story, so far...",
      description: "",
      author: "Gabriele Gatti",
      topics: ["about-me", "hi"],
      link: "/blog/this-is-my-story"
    },
    {
      id: 2,
      title: "University or not?",
      description: "",
      author: "Gabriele Gatti",
      topics: ["university", "university-life", "future"],
      link: "/blog/university-or-not"
    },
    {
      id: 3,
      title: "Italian Basketball team journey",
      description: "",
      author: "Gabriele Gatti",
      topics: ["basketball", "italy", "world-cup"],
      link: "/blog/italian-basketball-team-journey"
    },
    {
      id: 4,
      title: "Why I like Angular so much",
      description: "",
      author: "Gabriele Gatti",
      topics: ["angular", "programming", "web-development"],
      link: "/blog/why-i-love-angular"
    },
    {
        id: 5,
        title: "empty blog post to be filled",
        description: "",
        author: "Gabriele Gatti",
        topics: ["angular", "programming", "web-development"],
        link: "/blog/non-working-link"
    }
  ]