import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './../service/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router : Router,
    private authservice: AuthenticationService ) { }

  ngOnInit(): void {
    this.authservice.logout();
  } 

}
