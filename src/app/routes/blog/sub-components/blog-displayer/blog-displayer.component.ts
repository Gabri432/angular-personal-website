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

  optionBar: string[] = ["programming", "sport", "education", "stories", "gaming", "music"];

  ngOnInit() {
    document.getElementById("blog-options")!.style.display = "none";
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
      document.getElementById("blog-options")!.style.display = "block";
      document.querySelector("meta[name='keywords']" )!.setAttribute("content", "Gabriele Gatti, Gabriele, Gabri432");
      document.querySelector("meta[name='description']" )!.setAttribute("content", "A personal website and blog made with Angular 16+ by Gabriele Gatti");
    }
  }

  changeRoute(route: string) {
    window.location.href = "/angular-personal-website" + route; 
  }
}
