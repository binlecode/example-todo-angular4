import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit(): void {
    this.todoDataService.getAllTodos()
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo)
      .subscribe(newTodo => {
        this.todos = this.todos.concat(newTodo);
      });
  }

  onToggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo)
      .subscribe(toggledTodo => {
        todo = toggledTodo;
      });
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodo(todo.id)
      .subscribe(_ => {
        this.todos = this.todos.filter(td => td.id !== todo.id);
      });
  }

  // get todos() {
  //   return this.todoDataService.getAllTodos();
  // }



}
