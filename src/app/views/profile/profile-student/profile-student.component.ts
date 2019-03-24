import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit {


  currentUser: {username, token};
    currentUserSubscription: Subscription;
    userProfile:any;
    userRol : string;
    constructor(private router: Router, private route: ActivatedRoute) {
        // this.currentUserSubscription = this.signinService.currentUser.subscribe(user => {
        //     this.currentUser = user;
        // });

        this.userProfile = JSON.parse(localStorage.getItem("userProfile"));
         this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
         this.userRol = this.userProfile.roles[0].value;

         
         //console.log(this.userProfile.roles);
    }

    ngOnInit() {
       
    }


}
