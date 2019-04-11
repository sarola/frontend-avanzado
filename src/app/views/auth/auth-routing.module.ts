import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './containers/login-page.component';
import {SigninComponent} from '../signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}