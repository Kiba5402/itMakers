import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'focusable-input',
  templateUrl: './focusable-input.component.html',
  styleUrls: ['./focusable-input.component.css']
})
export class FocusableInputComponent implements OnInit {

  @Output() envFocus = new EventEmitter<string>();

  constructor() { }

  changeFocus(e: any) {   
    this.envFocus.emit(e.target.value);
  }

  ngOnInit(): void {
    this.envFocus.emit("focus");
  }

}
