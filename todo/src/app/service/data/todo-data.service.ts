import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todos } from '../../list-todos/list-todos.component'

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(

    private httpClient: HttpClient
  ) { }

  getTodoListFromApi(name){
    
    return this.httpClient.get<Todos[]>(`http://localhost:8080/todo-api/${name}/todos/`)
  }

  deleteTodoItem(name,todoId){
    console.log("delete request to api for todo id", todoId)
    return this.httpClient.delete(`http://localhost:8080/todo-api/${name}/todo/${todoId}`)
  }

  getTodoItemById(name,id){

    return this.httpClient.get<Todos>(`http://localhost:8080/todo-api/${name}/todo/${id}`)
  }

  updateTodo(name,id,todo:Todos){
    return this.httpClient.put(`http://localhost:8080/todo-api/${name}/todo/${id}`,todo)
  }

  addTodo(name,todo:Todos){
    return this.httpClient.post(`http://localhost:8080/todo-api/${name}/todo/`,todo)
  }

 
  
}
