import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../environments/environment';
import {Todo} from './todo';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// define environment specific api url
const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  /*
   * the Angular HTTP service methods return Observables (RxJS)
   * Http CRUDs API:
   * delete(url, options): perform a DELETE request
   * get(url, options): perform a GET request
   * head(url, options): perform a HEAD request
   * options(url, options): perform an OPTIONS request
   * patch(url, body, options): perform a PATCH request
   * post(url, body, options): perform a POST request
   * put(url, body, options): perform a PUT request
   *
   */
  constructor(private http: Http) {
  }

  /**
   * API: GET /todos
   */
  getAllTodos() {
    return this.http.get(API_URL + '/todos')
      .map(response => {
        return response.json().map((todo) => new Todo(todo));
      }).catch(this.handleError);
  }

  /**
   * API: GET /todos/:id
   * @param {string} id
   */
  getTodo(todoId: number) {
    return this.http.get(`${API_URL}/todos/${todoId}`)
      .map(response => {
        return new Todo(response.json());
      }).catch(this.handleError);
  }

  /**
   * API: POST /todos
   * @param {Todo} todo
   */
  createTodo(todo: Todo) {
    return this.http.post(`${API_URL}/todos`, todo)
      .map(response => {
        return new Todo(response.json());
      }).catch(this.handleError);
  }

  /**
   * API: PUT /todos/:id
   * @param {Todo} todo
   */
  updateTodo(todo: Todo) {
    return this.http.put(`${API_URL}/todos/${todo.id}`, todo)
      .map(response => {
        return new Todo(response.json());
      }).catch(this.handleError);
  }

  /**
   * API DELETE /todos/:id
   * @param {string} todoId
   */
  deleteTodo(todoId: number) {
    return this.http.delete(`${API_URL}/todos/${todoId}`)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
