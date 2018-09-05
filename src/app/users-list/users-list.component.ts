import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from './../users.service';

import { User } from '../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private usersService: UsersService,
  ) {
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
        if (!isNaN(id)) {
          this.user = this.getUserById({ users: this.users, id: id });
        }
      }, () => {
        this.users = [];
      });
  }

  userClicked(user: User) {
    this.user = this.getUserById({ users: this.users, id: user.id });
    this.location.replaceState(`users/${user.id}`);
  }

  closeModalClicked(): void {
    this.user = <User>{};
    this.location.replaceState(`users`);
  }

  getUserById({ users, id }: { users: User[], id: number }): User {
    return users.find(user => {
      return user.id === id;
    });
  }
}
