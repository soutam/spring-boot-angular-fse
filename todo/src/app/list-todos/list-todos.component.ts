import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todoList=[
    {id: 1, description: 'Brushing'},
    {id: 2, description: 'BreakFast'},
    {id: 3, description: 'Office Meeting'},
    {id: 4, description: 'Office Work'},
    {id: 5, description: 'Lunch'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
