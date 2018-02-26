import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  constructor(
    private httpClient: HttpClient
  ) {  }

  getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
