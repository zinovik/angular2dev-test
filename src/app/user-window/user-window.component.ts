import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { User } from '../user';

const ESCAPE_KEYCODE = 27;

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

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent): void {
    if (event.keyCode === ESCAPE_KEYCODE) {
      this.windowAction.emit('close');
    }
  }

}
