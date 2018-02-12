import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: string) {
    const url: string = 'https://jsonplaceholder.typicode.com/posts/' + id;
    return this.http.get(url);
  }
}
