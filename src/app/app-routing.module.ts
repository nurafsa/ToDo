import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ExecuteTodoComponent } from './execute-todo/execute-todo.component';


const routes: Routes = [
  {path:'create', component: CreateTodoComponent},
  {path:'execute', component: ExecuteTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
