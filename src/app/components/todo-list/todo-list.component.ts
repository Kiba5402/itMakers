import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public items: Array<{
    'texto': string,
    'done': boolean
  }>;

  constructor() {
    this.items = [
      { 'texto': 'Elemento 1', 'done': false },
      { 'texto': 'Elemento 2', 'done': false },
      { 'texto': 'Elemento 3', 'done': false },
      { 'texto': 'Elemento 4', 'done': false }
    ]
  }

  onItemClick(object: any, event: any) {
    object.done = true;
    event.target.setAttribute('disabled', true);
  }

  ngOnInit(): void {
  }

}
