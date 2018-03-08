import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface RequestedDataInterface {
  albumId: number,
  id: number,
  title: string,
  url: string
}

@Injectable()
export class HttpRequestService {
  constructor(private http: HttpClient) {
    }

  getData() {
    return this.http.get<RequestedDataInterface>('https://jsonplaceholder.typicode.com/photos');
  }
}

