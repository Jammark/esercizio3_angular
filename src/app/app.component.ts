import { Component } from '@angular/core';
import { FetchServiceService } from 'src/app/srv/fetch-service.service';
import {Post} from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app3';

}
