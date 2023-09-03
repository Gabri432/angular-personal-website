import { Component, Input } from '@angular/core';
import { BlogPost } from '../../models/blogPost';

@Component({
  selector: 'app-blog-displayer',
  templateUrl: './blog-displayer.component.html',
  styleUrls: ['./blog-displayer.component.scss']
})
export class BlogDisplayerComponent {

  @Input() displayBlogs: Array<BlogPost> = []

  blogs: Array<BlogPost> = [
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
    }
  ]

  otherBlogs: Array<BlogPost> = [
    {
      id: 5,
      title: "empty blog post to be filled",
      description: "",
      author: "Gabriele Gatti",
      topics: ["angular", "programming", "web-development"],
      link: "/blog/non-working-link"
    }
  ];

  ngOnInit() {
    if (this.displayBlogs.length == 0) {
      this.displayBlogs = this.blogs; 
    }
    if (window.location.pathname.includes("/blogs")) {
      this.blogs.push(...this.otherBlogs);
      this.displayBlogs = this.blogs;
    }
  }

  changeRoute(route: string) {
    window.location.href = "/angular-personal-website" + route; 
  }
}
