
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(uname: string, password: string){
    if(uname==='soutam' && password==='1234')
    {
      sessionStorage.setItem('authenticateduser',uname);
      return true
      // this.router.navigate(['welcome', this.uname])
    }else{
      return false;
    } 
  }

  logout(){
    sessionStorage.removeItem('authenticateduser');
  }
  isUserLoggedIn(){
   let user =  sessionStorage.getItem('authenticateduser');
   return !(user === null)
  }

}
