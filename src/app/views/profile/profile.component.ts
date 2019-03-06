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
    userProfile:any;
    userRol : string;
    constructor(private router: Router, private route: ActivatedRoute) {
        // this.currentUserSubscription = this.signinService.currentUser.subscribe(user => {
        //     this.currentUser = user;
        // });

        this.userProfile = JSON.parse(localStorage.getItem("userProfile"));
         this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
         console.log("userProfile: " + JSON.stringify(this.userProfile));
         this.userRol = this.userProfile.roles[0].value;
         console.log("rol: " + this.userRol);
         
         //console.log(this.userProfile.roles);
    }

    ngOnInit() {
       
    }

  
  

    

    
}
