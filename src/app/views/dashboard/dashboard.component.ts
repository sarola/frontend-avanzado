import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {AppSettings} from '../../shared/app.settings';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


   currentUser: {username, token};
    currentUserSubscription: Subscription;
    userProfile:any;
    userRol : string;
    constructor(private router: Router, private route: ActivatedRoute) {

        this.userProfile = JSON.parse(localStorage.getItem("userProfile"));
         this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
         this.userRol = this.userProfile.roles[0].value;
    }

    ngOnInit() {
    }

  

}
