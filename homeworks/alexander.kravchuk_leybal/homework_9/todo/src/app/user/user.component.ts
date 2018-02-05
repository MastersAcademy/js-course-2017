import { Component, OnInit, Input } from '@angular/core';
import {UserService} from "../user.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: UserService;

  constructor() { }

  ngOnInit() {
  }
}
