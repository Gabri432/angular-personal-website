import { Component } from '@angular/core';
import { BlogPost } from '../../models/blogPost';

@Component({
  selector: 'app-blog-displayer',
  templateUrl: './blog-displayer.component.html',
  styleUrls: ['./blog-displayer.component.scss']
})
export class BlogDisplayerComponent {

  blogs: Array<BlogPost> = [
    {
      id: 1,
      title: "This is my story, so far...",
      description: "",
      author: "Gabriele Gatti",
      topics: ["about-me", "hi"],
      link: "blog/this-is-my-story"
    },
    {
      id: 2,
      title: "Italian Basketball team journey",
      description: "",
      author: "Gabriele Gatti",
      topics: ["basketball", "italy", "world-cup"],
      link: ""
    },
    {
      id: 3,
      title: "Why I like Angular so much",
      description: "",
      author: "Gabriele Gatti",
      topics: ["angular", "programming", "web-development"],
      link: ""
    }
  ]
}
