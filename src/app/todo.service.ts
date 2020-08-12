import { Injectable } from '@angular/core';
import { ToDo } from './ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  allToDoItems = [];

  constructor() { }
  // {
  //   this.allToDoItems = JSON.parse(localStorage.getItem('todos'));
  //   if (this.allToDoItems) {
  //     this.allToDoItems = [];
  //   }
  // }


  getAllToDoItems() {
    return this.allToDoItems;
  }

  markTaskCompleted(id) {
    for (var i = 0; i < this.allToDoItems.length; i++) {
      if (this.allToDoItems[i].id == id) {
        this.allToDoItems[i].completed = true;
      }
    }
    // localStorage.setItem('todos', JSON.stringify(this.allToDoItems));
  }

  createTask(task) {
    var newId = this.allToDoItems.length + 1;

    var newToDo: ToDo = {
      id: newId,
      task: task,
      complete: false,
    };

    this.allToDoItems.push(newToDo);

    // localStorage.setItem('todos', JSON.stringify(this.allToDoItems));
  }
}
