import { Component, OnInit } from '@angular/core';

import { UsersService } from './../users.service';

import { User } from '../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(
    public usersService: UsersService,
  ) {
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      }, () => {
        this.users = [];
      });
  }

}
