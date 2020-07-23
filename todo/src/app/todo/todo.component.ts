import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service'
import { Todos } from '../list-todos/list-todos.component'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todos
  todoid: string

  constructor(private todoService:  TodoDataService,
    private route :ActivatedRoute) { }

  ngOnInit(): void {

    this.todoid = this.route.snapshot.params['id']
    this.getTodoItemById(this.todoid)
  }

  getTodoItemById(id){
    this.todoService.getTodoItemById('soutam',id).subscribe(
      response=> this.todo = response
    )
  }
}
