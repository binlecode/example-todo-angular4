import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  constructor(private api: ApiService) { }

  getTodo(id: number): Observable<Todo> {
    return this.api.getTodo(id);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  /** simulate add operation */
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.api.deleteTodo(id);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  toggleTodoComplete(todo: Todo): Observable<Todo> {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}
