import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {

  @ViewChild('input', { static: true }) input: ElementRef;

  public ref: string;

  constructor() { }

  envFocusP(e: string) {
    this.ref = e;
    if (this.ref === "focus") {
      this.input.nativeElement.focus();
    } else {
      this.input.nativeElement.blur();
    }
  }

  ngOnInit(): void {

  }

}
