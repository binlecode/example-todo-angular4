import {TestBed, inject} from '@angular/core/testing';

import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
import {ApiService} from './api.service';
import {ApiMockService} from './api-mock.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService, {provide: ApiService, useClass: ApiMockService}]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  // describe('#getAllTodos()', () => {
  //   it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
  //     expect(service.getAllTodos()).toEqual([]);
  //   }));
  //
  //   it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo1 = new Todo({title: 'Hello 1', complete: false});
  //     let todo2 = new Todo({title: 'Hello 2', complete: true});
  //     service.addTodo(todo1);
  //     service.addTodo(todo2);
  //     expect(service.getAllTodos()).toEqual([todo1, todo2]);
  //   }));
  // });
  //
  // describe('#saveTodo(todo)', () => {
  //
  //   it('should bump todo object id by save', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo1 = new Todo({title: 'Hello 1', complete: false});
  //     let todo2 = new Todo({title: 'Hello 2', complete: true});
  //     service.addTodo(todo1);
  //     service.addTodo(todo2);
  //     expect(service.getTodo(1)).toEqual(todo1);
  //     expect(service.getTodo(2)).toEqual(todo2);
  //   }));
  // });
  //
  // describe('#deleteTodo(id)', () => {
  //   it('should remove todo with given id', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo1 = new Todo({title: 'Hello 1', complete: false});
  //     let todo2 = new Todo({title: 'Hello 2', complete: true});
  //     service.addTodo(todo1);
  //     service.addTodo(todo2);
  //     expect(service.getAllTodos().length).toEqual(2);
  //     expect(service.getAllTodos()).toEqual([todo1, todo2]);
  //
  //     service.deleteTodo(todo1.id);
  //     expect(service.getAllTodos()).toEqual([todo2]);
  //   }));
  //
  //   it('should not remove any todo with not-found id', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo1 = new Todo({title: 'Hello 1', complete: false});
  //     let todo2 = new Todo({title: 'Hello 2', complete: true});
  //     service.addTodo(todo1);
  //     service.addTodo(todo2);
  //     service.deleteTodo(3);
  //     expect(service.getAllTodos()).toEqual([todo1, todo2]);
  //   }));
  // });
  //
  // describe('#updateTodo(todo)', () => {
  //   it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.addTodo(todo);
  //     todo.title = 'new title';
  //     let updatedTodo = service.updateTodo(todo).complete;
  //     const updatedTodo = service.getTodo(todo.id)
  //     expect(updatedTodo.title).toEqual('new title');
  //   }));
  //
  //   it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.addTodo(todo);
  //     let updatedTodo = service.updateTodo(2, {
  //       title: 'new title'
  //     });
  //     expect(updatedTodo).toEqual(null);
  //   }));
  // });
  //
  // describe('#onToggleTodoComplete(todo)', () => {
  //   it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.addTodo(todo);
  //     let updatedTodo = service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(true);
  //     service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(false);
  //   }));
  //
  // });


});
