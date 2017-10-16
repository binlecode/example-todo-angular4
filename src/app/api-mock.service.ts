import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Todo} from './todo';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor() { }

  getAllTodos(): Observable<Todo[]> {
    return Observable.of([
      new Todo({id: 1, title: 'Read books', complete: false})
    ]);
  }

  getTodo(todoId: number): Observable<Todo> {
    return Observable.of(
      new Todo({id: todoId, title: 'Read books', complete: false})
    );
  }

  createTodo(todo: Todo): Observable<Todo> {
    return Observable.of(
      new Todo({id: 1, title: 'Read books', complete: false})
    );
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return Observable.of(todo);
  }

  deleteTodo(todoId: number): Observable<null> {
    return null;
  }

}
