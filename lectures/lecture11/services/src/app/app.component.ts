import { Component } from '@angular/core';
import { LoggerService, PostsService } from './services';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts$: Observable<any>;

  constructor(
    private logger: LoggerService,
    private postsService: PostsService
  ) {
    this.posts$ = postsService.getPosts();

    logger.debug('we are working');
  }
}
