import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoService } from './todo.service';

import { NgRedux , NgReduxModule, DevToolsExtension} from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {



  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }


}
