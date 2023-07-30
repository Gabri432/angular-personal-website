import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';



@NgModule({
  declarations: [
    HomeComponent,
    MyProjectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
