import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service'
import { Todos } from '../list-todos/list-todos.component'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todos
  todoid: number
  
  constructor(private todoService: TodoDataService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.todoid = this.activeRoute.snapshot.params['id']
    this.todo = new Todos(this.todoid, '','No',new Date())

    if (this.todoid != -1) {
      this.getTodoItemById(this.todoid)
    }
  }

  getTodoItemById(id) {
    this.todoService.getTodoItemById('soutam', id).subscribe(
      response => this.todo = response
    )
  }

  updateTodo() {
   
    if (this.todoid != -1) {
      this.todoService.updateTodo('soutam', this.todoid, this.todo).subscribe(
        response => {
          // console.log(response)
          this.router.navigate(['todos'])
        }
      )
    }else{
      this.todoService.addTodo('soutam',this.todo).subscribe(
        response => {this.router.navigate(['todos'])}
      )
    }
  }

  onItemChange(val){
    console.log('val is',val)
    this.todo.completed=val
  }
}
