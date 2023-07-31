import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  englishAboutMe: string = "";
  italianAboutMe: string = "Ciao! Sono un aspirante sviluppatore di software che attualmente studia Informatica all'Università degli studi di Milano.";

}
