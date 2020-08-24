import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../service/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname: string
  password: string
  errorMessage = 'invalid credential'
  isInvalid = false

  constructor(private router: Router,
    private authservice: AuthenticationService) { }


  ngOnInit(): void {
  }

  handleLogin() {

    this.authservice.authenticate(this.uname, this.password).subscribe(
      data => {
        console.log('I am here');
        this.isInvalid = false
        this.router.navigate(['welcome', this.uname])
      },
      error => { this.isInvalid = true }
    )

  }

}
