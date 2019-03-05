import { POP, TOGGLE_TODO } from './../../action';
import { NgRedux, select } from 'ng2-redux';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { IAppState } from 'app/store';
import { PUSH } from 'action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @select() todosArray;

  // Read the comment in TodoService
  constructor(private service: TodoService, private ngRedux: NgRedux<IAppState>) {
  }

  addTodo(input) {
    if (!input.value) return;

    this.ngRedux.dispatch({type: PUSH, title: input.value})
    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({type: TOGGLE_TODO, id: todo.id});
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: POP, title: todo})

  }
}
