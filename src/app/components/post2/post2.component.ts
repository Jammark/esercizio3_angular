import { Component, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { FetchServiceService } from 'src/app/srv/fetch-service.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component implements OnInit , OnChanges{


  posts : Post[];
  active : boolean = false;
  srv: FetchServiceService;

  constructor(srv: FetchServiceService) {
    this.srv = srv;
    this.posts = [];
    this.getList(srv);
  }

   async getList(srv: FetchServiceService):Promise<void>{
    this.posts = srv.getPosts;
  }

  action(post:Post):void{
    this.srv.update({active:true}, post.id);
    this.getList(this.srv);
  }

  ngOnInit(): void {
    console.log('oninit');
    this.posts = this.srv.getPosts;
  }

ngOnChanges(changes: SimpleChanges): void {
  console.log('test changes');
  this.getList(this.srv);
}

}
