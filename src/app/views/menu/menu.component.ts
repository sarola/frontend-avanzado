import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {SigninService} from '../../shared/services/signin.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


   currentUser: {username, token};
    currentUserSubscription: Subscription;
    userProfile:any;
    userRol : string;
    constructor(private router: Router, private route: ActivatedRoute, private signinService: SigninService) {

        this.userProfile = JSON.parse(localStorage.getItem("userProfile"));
         this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
         this.userRol = this.userProfile.roles[0].value;

    }

    ngOnInit() {
       
    }
    logout() {
        this.signinService.logout();
        this.currentUser = null;
        this.router.navigate(['/signin']);
    }
  

}
