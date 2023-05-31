import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from 'src/app/srv/fetch-service.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component implements OnInit {


  posts : Post[];
  active : boolean = false;

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
