import { Component } from '@angular/core';
import { NonceGeneratorService } from 'src/app/core/services/nonce-generator.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngOnInit(): void {
    //this.setNounce();
    this.changeURLcanonical();
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
    document.querySelector("link[rel='canonical']")!.setAttribute("href", "");
    document.querySelector("link[rel='canonical']")!.setAttribute("href", "https://gabri432.github.io/angular-personal-website/");
    this.changeJSONLDSchema();
  }

  changeJSONLDSchema(): void {
    const structuredData = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "url": "https://gabri432.github.io/angular-personal-website/",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://gabri432.github.io/angular-personal-website/",
              "name": "Home page of Gabriele Gatti personal website, Welcome!"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://gabri432.github.io/angular-personal-website/projects",
              "name": "Page of all the coding projects made by Gabriele Gatti, Welcome!"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": "https://gabri432.github.io/angular-personal-website/blogs",
              "name": "Page of all blog posts made by Gabriele Gatti, Welcome!"
            }
          }
        ]
      }
    }
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

}
