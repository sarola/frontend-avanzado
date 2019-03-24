import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import { Router, ActivatedRoute } from '@angular/router';
import {ProfileService} from '../../../shared/services/profile.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit {


  currentUser: {username, token};
    currentUserSubscription: Subscription;
    userProfile: any;
    userRol: string;
    borradoEstudio = false;
    borradoTrabajo = false;
    borradoIdioma = false;
    constructor(private router: Router, private route: ActivatedRoute, private profileService: ProfileService) {
        // this.currentUserSubscription = this.signinService.currentUser.subscribe(user => {
        //     this.currentUser = user;
        // });

        this.userProfile = JSON.parse(localStorage.getItem("userProfile"));
         this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
         this.userRol = this.userProfile.roles[0].value;
        this.borradoEstudio = false;
        this.borradoTrabajo = false;
        this.borradoIdioma = false;

    }

    ngOnInit() {
       
    }
    borrarEstudio(estudio:any){
        this.userProfile.studies.splice(estudio.uid, 1);
        this.borradoEstudio = true;
        localStorage.setItem("userProfile", JSON.stringify(this.userProfile));
        this.profileService.updateProfile(this.userProfile);
    }
    borrarTrabajo(trabajo:any){
        this.userProfile.experiences.splice(trabajo.uid, 1);
        this.borradoTrabajo = true;
        localStorage.setItem("userProfile", JSON.stringify(this.userProfile));
        this.profileService.updateProfile(this.userProfile);

    }
    borrarIdioma(idioma:any){
        this.userProfile.languages.splice(idioma.uid, 1);
        this.borradoIdioma = true;
        localStorage.setItem("userProfile", JSON.stringify(this.userProfile));
        this.profileService.updateProfile(this.userProfile);

    }
}
