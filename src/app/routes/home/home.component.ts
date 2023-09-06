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
    NonceGeneratorService.generateNonce()
    console.log(environment.nonce.length);
    //document.querySelector("meta[http-equiv='Content-Security-Policy']" )!.setAttribute("content", "script-src 'self' 'sha512-'" + environment.nonce);
  }

}
