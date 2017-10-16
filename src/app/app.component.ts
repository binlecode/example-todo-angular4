import {Component, OnInit} from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
