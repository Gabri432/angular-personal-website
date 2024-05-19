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
    const scriptElement = document.querySelector("script[type='application/ld+json']") as HTMLScriptElement;
    const parsedJSON = JSON.parse(scriptElement.textContent!);
    parsedJSON.headline = "Personal Website of Gabriele Gatti";
    parsedJSON.author = "{ '@type': 'Person', 'name': 'Gabriele Gatti'}";
    parsedJSON.publisher = "{ '@type': 'Person', 'name': 'Gabriele Gatti'}";
    parsedJSON.description = "Gabriele Gatti personal website made with angular, to showcase my coding projects and blog posts.";
    parsedJSON.mainEntityOfPage['@id'] = "https://gabri432.github.io/angular-personal-website/";
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(parsedJSON);
    document.head.appendChild(script);
  }

}
