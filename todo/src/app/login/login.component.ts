import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 uname= 'abc'
  password= ''
  errorMessage = 'invalid credential'
  isInvalid = false

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  handleLogin(){

    

    if(this.uname === 'soutam' && this.password === '1234')
    {
      this.isInvalid = false
      this.router.navigate(['welcome', this.uname])
    }else{
      this.isInvalid = true 
    } 
  }

}
