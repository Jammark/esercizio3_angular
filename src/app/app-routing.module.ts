import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Post1Component } from './components/post1/post1.component';
import { Post2Component } from './components/post2/post2.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"post1",
  component: Post1Component
},{
  path:"post2",
  component: Post2Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
