import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  public msg: String;
  public flagP: boolean;

  constructor() {
    this.msg = "Mostrar parrafo";
    this.flagP = false;
  }

  toggleP() {
    if (this.flagP) {
      this.flagP = !this.flagP;
      this.msg = "Mostrar parrafo";
    } else {
      this.flagP = !this.flagP;
      this.msg = "Ocultar parrafo";
    }
  }

  ngOnInit(): void {
  }

}
