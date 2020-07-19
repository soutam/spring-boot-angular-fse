import { Component, OnInit } from '@angular/core';



export class Todos{

  constructor(
    public id : number,
    public description: string,
    public done : boolean,
    public targetDate: Date

  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})



export class ListTodosComponent implements OnInit {

  todoList=[
    new Todos(1,'Brushing', true, new Date()),
    new Todos(2,'BreakFast',true, new Date()),
    new Todos(3, 'Office Meeting',true, new Date()),
    new Todos( 4, 'Office Work', false, new Date()),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
