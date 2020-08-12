import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  task = "";
  due = "";

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.todoService.createTask(this.task);
    this.task = "";
  }

}
