import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import { FetchServiceService } from 'src/app/srv/fetch-service.service';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.scss']
})
export class Post1Component implements OnInit {

  posts : Post[];
  active : boolean = true;

  constructor(srv: FetchServiceService) {
    this.posts = [];
    this.getList(srv);
  }

   async getList(srv: FetchServiceService):Promise<void>{
    this.posts = await  srv.getPostList();
  }

  ngOnInit(): void {
  }

}
