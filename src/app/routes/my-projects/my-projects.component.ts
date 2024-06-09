import { Component, Input } from '@angular/core';
import { Project } from './models/project';
import { languages } from './content/project-languages';
import { mainProjects, extraProjects } from '../my-projects/content/projects';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {

  @Input() displayProjects: Array<Project> = []


  optionBar: string[] = [...languages];
  pathName = "";

  ngOnInit() {
    this.displayProjects = [...mainProjects];
    if (window.location.pathname.includes("/projects")) {
      this.pathName = "projects";
      this.displayProjects.push(...extraProjects);
      this.changeJSONLDSchema();
    }
  }

  filterProjects(language: string) {
    this.displayProjects = [];
    for (const project of [...mainProjects, ...extraProjects]) {
      if (project.languages.includes(language)) {
        this.displayProjects.push(project);
      }
    }
  }

  changeJSONLDSchema(): void {
    (document.querySelector("script[type='application/ld+json']") as HTMLScriptElement).remove();
    const structuredData = {
      "@context": "http://schema.org",
      "@type": "CollectionPage",
      "mainEntity": [
        {
          "@type": "SoftwareSourceCode",
          "name": "TypoChecker.java",
          "description": "A Java program that, given a typo, will suggest the closest matching words.",
          "codeRepository": "https://github.com/Gabri432/java-unimi/blob/master/random_programs/TypoChecker.java"
        },
        {
          "@type": "SoftwareSourceCode",
          "name": "RelationSet.java",
          "description": "A Java program that classifies the property of a given mathematical set.",
          "codeRepository": "https://github.com/Gabri432/java-unimi/blob/master/random_programs/RelationSet.java"
        }, 
        {
          "@type": "SoftwareSourceCode",
          "name": "CommandLine.java",
          "description": "A Java program that simulates the behavior of a command line to perform simple math operations.",
          "codeRepository": "https://github.com/Gabri432/java-unimi/blob/master/random_programs/CommandLine.java"
        },
        {
          "@type": "SoftwareSourceCode",
          "name": "equation-solver",
          "description": "A program written in Go that can solve any linear, quadratic or cubic equation.",
          "codeRepository": "https://github.com/Gabri432/equation-solver"
        },
        {
          "@type": "SoftwareSourceCode",
          "name": "gophysics",
          "description": "A library written in Go that contains a list of several famous Physics formula to make calculations.",
          "codeRepository": "https://github.com/Gabri432/gophysics"
        },
        {
          "@type": "SoftwareSourceCode",
          "name": "angular-cv-builder",
          "description": "A website that helps create your resume.",
          "url": "https://angular-cv-builder.pages.dev/"
        }
      ]
    }    
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

}
