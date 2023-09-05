import { Component, Input } from '@angular/core';
import { BlogPost } from '../../models/blogPost';
import { blogs } from '../../content/blogPosts';

@Component({
  selector: 'app-blog-displayer',
  templateUrl: './blog-displayer.component.html',
  styleUrls: ['./blog-displayer.component.scss']
})
export class BlogDisplayerComponent {

  @Input() displayBlogs: Array<BlogPost> = []

  blogs: Array<BlogPost> = []

  otherBlogs: Array<BlogPost> = [];

  ngOnInit() {
    if (this.displayBlogs.length == 0) {
      for (let blog of blogs) {
        if (this.displayBlogs.length > 3) {
          break;
        }
        this.displayBlogs.push(blog);
      }
    }

    if (window.location.pathname.includes("/blogs")) {
      this.displayBlogs = blogs;
    }
  }

  changeRoute(route: string) {
    window.location.href = "/angular-personal-website" + route; 
  }
}
