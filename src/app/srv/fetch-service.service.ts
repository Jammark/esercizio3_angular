import { Injectable } from '@angular/core';
import {Post} from '../models/post';
import {PostItem} from '../models/post-item';

type Json = {
  title: string,
  id:number,
  body:string,
  active:boolean,
}

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {


  constructor() { }

  getPostList():Promise<Post[]>{
    return fetch('../../assets/db/db.json')
    .then(response => response.json())
    .then(data => data.map((element: Json) => new PostItem(element.title, element.id, element.body, element.active)));
  }
}
