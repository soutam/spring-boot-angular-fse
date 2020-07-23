import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service'

export class Todos{

  constructor(
    public id : number,
    public description: string,
    public completed : boolean,
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

  constructor(private todoService: TodoDataService) { }

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
}
