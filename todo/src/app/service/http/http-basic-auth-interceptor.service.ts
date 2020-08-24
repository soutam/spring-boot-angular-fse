import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service'

@Injectable({
  providedIn: 'root'
})
export class HttpBasicAuthInterceptorService implements HttpInterceptor{

  constructor(private authService : AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let authenticatedUser = this.authService.getAuthenticatedUser();
    let token = this.authService.gteAuthenticatedToken()
    
    if(authenticatedUser && token){
      
      request = request.clone({
      setHeaders:{
        Authorization: token
      }
    })}

    

    return next.handle(request);
  }
}
