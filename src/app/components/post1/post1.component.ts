import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Post} from '../../models/post';
import { FetchServiceService } from 'src/app/srv/fetch-service.service';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.scss']
})
export class Post1Component implements OnInit , OnChanges{

  posts : Post[];
  active : boolean = true;
  srv: FetchServiceService;

  constructor(srv: FetchServiceService) {
    this.srv = srv;
    this.posts = [];
    this.getList(this.srv);
    console.table(this.posts);
  }

  action(post:Post){
      this.srv.update({active:false}, post.id);
      this.getList(this.srv);
  }

  getList(srv: FetchServiceService):void{
    this.posts = srv.getPosts;
  }

  ngOnInit(): void {
    console.log('init post1');
    this.getList(this.srv);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('data changed');
    this.getList(this.srv);
  }
}
