import { Project } from "../models/project";

export const mainProjects: Array<Project> = [
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
]

export const extraProjects: Array<Project> = [
    {
        name: "angular-cv-builder",
        description: "A website that helps create your resume.", 
        link: "https://angular-cv-builder.pages.dev/", 
        languages: ["Angular", "Typescript"]
    }
]