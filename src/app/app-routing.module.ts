import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { MyProjectsComponent } from './routes/my-projects/my-projects.component';
import { BlogComponent } from './routes/blog/blog.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'About Gabriele Gatti'},
  {path: 'projects', component: MyProjectsComponent, title: 'My Projects'},
  {path: 'blog', component: BlogComponent, title: 'My Blogs'},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
