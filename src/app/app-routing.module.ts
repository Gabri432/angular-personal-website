import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { MyProjectsComponent } from './routes/my-projects/my-projects.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'About Gabriele Gatti'},
  {path: 'projects', component: MyProjectsComponent, title: 'My Projects'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
