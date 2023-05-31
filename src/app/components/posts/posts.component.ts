import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import { FetchServiceService } from 'src/app/srv/fetch-service.service';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() post?: Post;
  @Input() active?: boolean;
  srv: FetchServiceService;

  constructor(_srv: FetchServiceService) {
    this.srv = _srv;
  }

  buttonClick():void{
    console.log("btn click");
    if(this.post){
      this.post.active = !this.active;
     // this.srv.updatePost(this.post);
    }
  }

  ngOnInit(): void {
  }

}
