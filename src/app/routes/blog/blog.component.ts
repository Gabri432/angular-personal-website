import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from './models/blogPost';
import { environment } from 'src/environments/environment';
import { blogs } from './content/blogPosts';
import { NonceGeneratorService } from 'src/app/core/services/nonce-generator.service';

/*
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
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

  blogsToShow: Array<BlogPost> = []

  blogPost: string = ""; 
  constructor(private route: ActivatedRoute) { } 

  ngOnInit(): void {
    //this.setNounce();
    let articleName = this.route.snapshot.paramMap.get('title')!.replace("/", "");
    let articleTopic = this.route.snapshot.paramMap.get('topic')!.replace("/", "");
    let pathToFile = "../../../assets/blog-content/" + articleTopic + "/";
    if (environment.production) {
      pathToFile = "./assets/blog-content/" + articleTopic + "/";
    }
    this.blogPost = pathToFile + articleName + '.md'; 

    if (articleName != null) {
      const blogPostRetrieved: BlogPost = this.searchPostByTitle(articleName);
      document.querySelector("meta[name='keywords']" )!.setAttribute("content", blogPostRetrieved.topics.toString());
      document.querySelector("meta[name='description']" )!.setAttribute("content", blogPostRetrieved.description);
      document.title = blogPostRetrieved.title || "My Blog";
      this.changeJSONLDSchema(blogPostRetrieved);
    }
    

  }

  searchPostByTitle(title: string): BlogPost {
    for (let blog of blogs) {
      let blogTitle: string = blog.link.split("/")[3]; 
      if (blogTitle == title) {
        this.changeURLcanonical();
        return blog;
      }
    }
    return {
      id: 0,
      title: ".",
      description: "A personal website and blog made with Angular 16+ by Gabriele Gatti",
      author: "",
      topics: ["Gabriele Gatti", "Gabriele", "Gabri432"],
      link: "/blog/"
    };
  }

  setNounce(): void {
    NonceGeneratorService.generateNonce();
    let text = document.querySelector("meta[http-equiv='Content-Security-Policy']" )!.getAttribute("content");
    if (text!.includes("sha512-")) {
      return;
    }
    text = text!.concat(";\nscript-src 'self' 'sha512-" + environment.nonce + "'"); 
    document.querySelector("meta[http-equiv='Content-Security-Policy']" )!.setAttribute("content", text!);
  }

  changeURLcanonical(): void {
    document.querySelector("link[rel='canonical']")!.setAttribute("href", "https://gabri432.github.io" + location.pathname);
  }

  changeJSONLDSchema(currentBlogPost: BlogPost): void {
    (document.querySelector("script[type='application/ld+json']") as HTMLScriptElement).remove();
    //const parsedJSON = JSON.parse(scriptElement.textContent!);
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://gabri432.github.io" + location.pathname
      },
      "headline": currentBlogPost.title,
      "datePublished": currentBlogPost.creationDate+"T08:00:00+00:00",
      "dateModified": currentBlogPost.lastUpdateDate+"T09:20:00+00:00",
      "author": {
        "@type": "Person",
        "name": "Gabriele Gatti"
      },
      "publisher": {
        "@type": "Person",
        "name": "Gabriele Gatti"
      },
      "description": currentBlogPost.description
    }
    /*
    parsedJSON.headline = currentBlogPost.title;
    parsedJSON.author = "{ '@type': 'Person', 'name': 'Gabriele Gatti'}";
    parsedJSON.publisher = "{ '@type': 'Person', 'name': 'Gabriele Gatti'}";
    parsedJSON.description = currentBlogPost.description;
    parsedJSON.mainEntityOfPage['@id'] = "https://gabri432.github.io" + location.pathname;
    */
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    //script.textContent = JSON.stringify(parsedJSON);
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

}
