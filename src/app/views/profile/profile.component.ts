import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import { Router, ActivatedRoute } from '@angular/router';
import {ProfileStudentComponent} from './profile-student/profile-student.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  
    currentUser: {username, token};
    currentUserSubscription: Subscription;
    userProfile: any;
    userRol: string;
    constructor(private router: Router, private route: ActivatedRoute) {

        this.userProfile = JSON.parse(localStorage.getItem("userProfile"));
         this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
         this.userRol = this.userProfile.roles[0].value;
    }

    ngOnInit() {
    }
}
