import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

interface AppState {
  infoUser: { 'nombreUsr': string }
}

@Component({
  selector: 'greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  public user: string;

  constructor(private store: Store<AppState>) {
    store.subscribe(state => {
      this.user = state.infoUser.nombreUsr;
    });
  }

  ngOnInit(): void {
  }

}
