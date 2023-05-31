import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Post1Component } from './components/post1/post1.component';
import { Post2Component } from './components/post2/post2.component';
import { HeaderComponent } from './components/header/header.component';

import {RouterModule} from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostItem } from './models/post-item';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Post1Component,
    Post2Component,
    HeaderComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
