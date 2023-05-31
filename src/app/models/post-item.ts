import { NgModule } from '@angular/core';
import {Post} from './post';

export class PostItem implements Post{
  title: string;
  id:number;
  content:string;
  active:boolean;
  type:string;
  constructor(_title:string, _id:number, _content:string, _active:boolean, _type:string){
    this.title = _title;
    this.id= _id;
    this.content= _content;
    this.active = _active;
    this.type = _type;
  }
}
