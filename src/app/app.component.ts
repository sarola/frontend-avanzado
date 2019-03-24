import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {SigninService} from './shared/services/signin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UOCJob';
  currentUser: {id, username, token};
  currentUserValue:boolean;
  errorMessage:string;
    constructor(
        private router: Router,
        private signinService: SigninService
    ) {
        this.signinService.currentUser.subscribe(x => this.currentUser = x);
        this.errorMessage = localStorage.getItem("errorMessage");

         if(this.currentUser != null)
         	this.currentUserValue = true;
         else
         	this.currentUserValue = false;

         if(!this.currentUserValue){
           this.router.navigate(["/signin"]);
         }
    }

    logout() {
        this.signinService.logout();
        this.currentUser = null;
        this.router.navigate(['/signin']);

    }
}
