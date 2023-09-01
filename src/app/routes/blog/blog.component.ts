import { Component } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown'; 
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
/*
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { BlogPost } from './models/blogPost';
*/

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  /*constructor(private http: HttpClient) { 
    this.getBlogPosts().subscribe(arg => console.log(arg));
  }
  
  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('/api/blog');
  }*/

}
