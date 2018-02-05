import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=name,picture,location&results=4&nat=gb')
      .map(response => response.json())
      .map(response => response.results)
      .map(users => {
        return users.map( u => {
          return {
            name : u.name.first + ' ' + u.name.first,
            picture: u.picture,
            location: u.location.city + ' ' +  u.location.state
          }
        })
      })
  }
}
