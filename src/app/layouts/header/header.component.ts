import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  baseUrl: string = "";

  ngOnInit(): void {
    if (environment.production) {
      this.baseUrl = "angular-personal-website";
    }
  }
}
