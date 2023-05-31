import { Injectable } from '@angular/core';
import {Post} from '../models/post';
import {PostItem} from '../models/post-item';


type Json = {
  title: string,
  id:number,
  body:string,
  active:boolean,
  type:string
}

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  posts: Post[];





  constructor() {
    this.posts = [
      {
          "id":1,
          "content":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
          "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
          "active":true,
          "type":"news"
      },
      {
          "id":2,
          "content":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
          "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
          "active":true,
          "type":"politic"
      },
      {
          "id":3,
          "content":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
          "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
          "active":true,
          "type":"education"
      },
      {
          "id":4,
          "content":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
          "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
          "active":false,
          "type":"news"
      },
      {
          "id":5,
          "content":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
          "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
          "active":false,
          "type":"education"
      }
  ]
  ;

    console.log('service constr');
    console.table(this.posts);
  }

  async initPosts(){
      this.posts = await this.getPostList();
  }

  get getPosts():Post[]{
    return this.posts;
  }

  updatePost(item:Post):void{
    fetch('../../assets/db/db.json', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
    .then(response => console.log("rsp ok: "+response.ok))
    .catch(error => console.log(error));
  }



  static getPostListInit():Promise<Post[]>{
    return fetch('../../assets/db/db.json')
    .then(response => response.json())
    .then(data => data.map((element: Json) => new PostItem(element.title, element.id, element.body, element.active, element.type)));
  }

  getPostList():Promise<Post[]>{
    return fetch('../../assets/db/db.json')
    .then(response => response.json())
    .then(data => data.map((element: Json) => new PostItem(element.title, element.id, element.body, element.active, element.type)));
  }

  update(item : Partial<Post>, id:number):void{
    this.posts = this.posts.map(el => el.id == id ? {...el,...item} : el);
    console.table(this.posts);
  }
}
