import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-execute-todo',
  templateUrl: './execute-todo.component.html',
  styleUrls: ['./execute-todo.component.scss']
})
export class ExecuteTodoComponent implements OnInit {

  currentToDoItems = [];

  constructor(private todoService: TodoService) { }


  ngOnInit(): void {
    this.currentToDoItems = this.todoService.getAllToDoItems();
    console.log(this.currentToDoItems);
  }
  markItemDone(id) {
    this.todoService.markTaskCompleted(id);
  }
}
