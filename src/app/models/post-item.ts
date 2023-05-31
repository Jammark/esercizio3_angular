import { NgModule } from '@angular/core';
import {Post} from './post';

export class PostItem implements Post{
  title: string;
  id:number;
  content:string;
  active:boolean;
  constructor(_title:string, _id:number, _content:string, _active:boolean){
    this.title = _title;
    this.id= _id;
    this.content= _content;
    this.active = _active;
  }
}
