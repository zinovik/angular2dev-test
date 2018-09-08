import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-window',
  templateUrl: './user-window.component.html',
  styleUrls: ['./user-window.component.css']
})
export class UserWindowComponent implements OnInit {

  @Input() user: User;
  @Output() windowAction: EventEmitter<string> = new EventEmitter();

  constructor(
  ) {
  }

  ngOnInit() {
  }

  closeModalClicked(): void {
    this.windowAction.emit('close');
  }

}
