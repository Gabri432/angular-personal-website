import { Component } from '@angular/core';
import { BlogPost } from '../../models/blogPost';

@Component({
  selector: 'app-blog-displayer',
  templateUrl: './blog-displayer.component.html',
  styleUrls: ['./blog-displayer.component.scss']
})
export class BlogDisplayerComponent {
  blog!: BlogPost;

  blogs: Array<BlogPost> = [
    {
      id: 1,
      title: "",
      description: "",
      author: "Gabriele Gatti",
      topics: [""]
    },
    {
      id: 2,
      title: "",
      description: "",
      author: "Gabriele Gatti",
      topics: [""]
    },
    {
      id: 3,
      title: "",
      description: "",
      author: "Gabriele Gatti",
      topics: [""]
    }
  ]
}
