import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  englishAboutMe: string = "Hi there! I'm an italian aspiring software developer currently studying computer science at university.";
  italianAboutMe: string = "Ciao! Sono un aspirante sviluppatore di software che attualmente studia Informatica all'Università!";

  englishPassions: string[] = [
    "Basketball", "Olympic Lifting", "Physics", "Math", "Artificial Intelligence", 
    "Web Development", "App Development", "Game development"
  ];
  italianPassions: string[] = [
    "Pallacanestro", "Olympic Lifting", "Fisica", "Matematica","Intelligenza Artificiale", 
    "Sviluppo web", "Sviluppo di applicazioni", "Sviluppo di giochi"
  ];

  englishSkills: string[] = [
    "HTML", "CSS", "JavaScript",
    "Angular", "Python", "Java", "Github", "English", "Italian"
  ];
  italianSkills: string[] = [
    "HTML", "CSS", "JavaScript",
    "Angular", "Python", "Java", "Github", "Inglese", "Italiano"
  ];

}
