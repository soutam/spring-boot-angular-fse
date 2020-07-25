import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component'
import { RouteGuardService } from './service/route-guard.service'

//Defining Routes
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  {path:'todo/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent},
  {path:'error', component: ErrorComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
