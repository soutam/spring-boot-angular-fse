import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){

    

    if(this.uname === 'soutam' && this.password === '1234')
    {
      this.isInvalid = false
      console.log('login handled! ',this.uname, ' ', this.password
    )
    }else{
      this.isInvalid = true 
    } 
  }

}
