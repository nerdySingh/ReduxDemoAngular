
import { tassign } from 'tassign';
import { PUSH, POP, TOGGLE_TODO } from 'action';
import { stringify } from '@angular/core/src/util';

export interface IAppState {
  todosArray: any[];
  totalItems: number;
  addDate: Date;

}

export const INITIAL_STATE: IAppState = {
  todosArray : [],
  totalItems : 0,
  addDate: null

}

export function rootReducer(state: IAppState, action): IAppState
{
  switch (action.type) {

      case PUSH:

      const item = {id: state.todosArray.length + 1, title: action.title}
      return tassign(state,
        {
          todosArray: state.todosArray.concat(item),
          totalItems: state.totalItems + 1,
          addDate: new Date()
        })

      case POP:
      const target = state.todosArray.filter(i => i.id !== action.title.id)
      return tassign(state,{
        todosArray: target,
        totalItems: state.totalItems - 1,
        addDate: new Date()
      })

      case TOGGLE_TODO:
      const todo = (state.todosArray.find(t => t.id === action.id ));
      //console.log(todo)
      const index = state.todosArray.indexOf(todo);
      //console.log(index);

      return tassign(state, {
        todosArray: [...state.todosArray.slice(0, index), tassign(todo, {isCompleted: !todo.isCompleted}),
          ...state.todosArray.slice(index + 1),
        ],
        addDate: new Date()
      })

  }
  return state
}
