import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListHeaderComponent } from './todo-list-header.component';
import {Todo} from '../todo';

describe('TodoListHeaderComponent', () => {
  let component: TodoListHeaderComponent;
  let fixture: ComponentFixture<TodoListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have view model 'todo'`, async(() => {
    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.newTodo instanceof Todo).toBeTruthy();
  }));

});
