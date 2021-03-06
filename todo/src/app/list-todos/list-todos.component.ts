import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service'
import { Router } from '@angular/router'

export class Todos{

  constructor(
    public id : number,
    public description: string,
    public completed : string,
    public targetDate: Date

  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})



export class ListTodosComponent implements OnInit {

  todoList: Todos[]
  message:string

  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTodoList('soutam')
  }

  getTodoList(name){
    this.todoService.getTodoListFromApi(name).subscribe(
      response => {
        console.log(response)
        this.todoList=response}
    )
  }

  deleteTodoItem(todoId){
    console.log("todo to delete",todoId)
    this.todoService.deleteTodoItem('soutam',todoId).subscribe(
      response=> {
        this.message=`Delete todo ${todoId} Successful`
        this.getTodoList('soutam');
      }
    )

  }

  updateTodo(id){
    this.router.navigate(['todo',id])
  }

  addTodo(){
    this.router.navigate(['todo',-1])
  }
}
