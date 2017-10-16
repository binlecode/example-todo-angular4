import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  toggleTodoComplete(todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo) {
    this.remove.emit(todo);
  }




  ngOnInit() {
  }

}
