import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ngrx
import { StoreModule } from '@ngrx/store';
import { userReducer } from './components/user.reducer';

import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { TextinputComponent } from './components/textinput/textinput.component';
import { FocusableInputComponent } from './components/textinput/Component/focusable-input/focusable-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { GreeterComponent } from './components/greeter/greeter.component';
import { XComponentComponent } from './components/x-component/x-component.component';
import { SumaComponent } from './components/suma/suma.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    TextinputComponent,
    FocusableInputComponent,
    TodoListComponent,
    GreeterComponent,
    XComponentComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ 'infoUser': userReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
