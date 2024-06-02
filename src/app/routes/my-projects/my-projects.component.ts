import { Component, Input } from '@angular/core';
import { Project } from './models/project';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {

  @Input() displayProjects: Array<Project> = []

  projects: Array<Project> = [
    {
      name: "TypoChecker.java", 
      description: "A Java program that, given a typo, will suggest the closest matching words.", 
      link: "https://github.com/Gabri432/java-unimi/blob/master/random_programs/TypoChecker.java", 
      languages: ["Java"]
    },
    {
      name: "RelationSet.java", 
      description: "A Java program that classifies the property of a given mathematical set.",
      link: "https://github.com/Gabri432/java-unimi/blob/master/random_programs/RelationSet.java", 
      languages: ["Java"]
    },
    {
      name: "CommandLine.java", 
      description: "A Java program that simulates the behavior of a command line to perform simple math operations.", 
      link: "https://github.com/Gabri432/java-unimi/blob/master/random_programs/CommandLine.java",
      languages: ["Java"]
    },
    {
      name: "equation-solver", 
      description: "A program written in Go that can solve any linear, quadratic or cubic equation.", 
      link: "https://github.com/Gabri432/equation-solver", 
      languages: ["Go"]
    },
    {
      name: "gophysics", 
      description: "A library written in Go that contains a list of several famous Physics formula to make calculations.", 
      link: "https://github.com/Gabri432/gophysics", 
      languages: ["Go"]
    },
    {
      name: "LaplaceExpansion", 
      description: "A program written in Go to calculate the determinant of 3x3 and 4x4 matrices using the Laplace Theorem.", 
      link: "https://github.com/Gabri432/LaplaceExpansion", 
      languages: ["Go"]
    },
    {
      name: "angular-personal-website",
      description: "A personal website (this one you are using) made with the Angular framework (16+).", 
      link: "https://github.com/Gabri432/angular-personal-website", 
      languages: ["Angular", "Typescript"]
    }
  ];

  otherProjects: Array<Project> = [
    {
      name: "angular-cv-builder",
      description: "A website that helps create your resume.", 
      link: "https://angular-cv-builder.pages.dev/", 
      languages: ["Angular", "Typescript"]
    }
  ]

  ngOnInit() {
    this.displayProjects = this.projects;
    if (window.location.pathname.includes("/projects")) {
      this.projects.push(...this.otherProjects);
      this.displayProjects = this.projects;
      this.changeJSONLDSchema();
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
