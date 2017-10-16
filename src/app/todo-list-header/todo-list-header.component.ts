import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {
  // define component template specific view model
  newTodo: Todo = new Todo();

  // emit custom event thus to decouple from underlying service
  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

  ngOnInit() {
  }

}
