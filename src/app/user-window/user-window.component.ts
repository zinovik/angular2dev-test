import { Component, OnInit, Input } from '@angular/core';

import { Location } from '@angular/common';

import { User } from '../user';

@Component({
  selector: 'app-user-window',
  templateUrl: './user-window.component.html',
  styleUrls: ['./user-window.component.css']
})
export class UserWindowComponent implements OnInit {

  @Input() user: User;

  constructor(
    private location: Location,
  ) {
  }

  ngOnInit() {
  }

  closeModalClicked(): void {
    // Zero id to hide the modal window (for next updating from the parent component)
    this.user.id = 0;
    this.location.replaceState(`users`);
  }

}
