import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from './models/blogPost';
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

  blogs: Array<BlogPost> = []

  blogPost: string = ""; 
  constructor(private route: ActivatedRoute) { } 

  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('id');
    this.blogPost = '../../../assets/blog-content/' + articleName + '.md'; 
  }

}
