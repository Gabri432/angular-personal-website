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
    this.setNounce();
  }

  setNounce(): void {
    NonceGeneratorService.generateNonce();
    let text = document.querySelector("meta[http-equiv='Content-Security-Policy']" )!.getAttribute("content");
    text = text!.concat(";\nscript-src 'self' 'sha512-" + environment.nonce + "'");
    document.querySelector("meta[http-equiv='Content-Security-Policy']" )!.setAttribute("content", text!);
  }

}
