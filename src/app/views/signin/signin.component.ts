import { Component, OnInit } from '@angular/core';
import {SigninService} from '../../shared/services/signin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first, map } from 'rxjs/operators';
import {AppSettings} from '../../shared/app.settings';
import {ProfileService} from '../../shared/services/profile.service';
import {User} from '../../shared/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
 loginForm: FormGroup;
 submitted =false;
 loading =false;
 currentUser:any;
 returnUrl:string;
 users:any;
 fallologin:string;
    usersProfileArray: any[];
    userProfile: any;
  constructor(private signinService: SigninService, private formBuilder: FormBuilder, private router: Router,
              private route: ActivatedRoute, private profileService: ProfileService) {
  }
  ngOnInit() {

  	if(localStorage.getItem("errorMessage") != null)
      localStorage.removeItem("errorMessage");

 	this.submitted = false;
 	this.loading = false;
 	this.currentUser = null;
 	this.fallologin = "";
 	this.users = [
 	{
 		id:1,
 		username:"usuario1@mail.com",
 		password:"pass1"
 	},
   {
     id:2,
     username:"usuario2@mail.com",
     password: "pass2"

   }
 	];

   	localStorage.setItem("users", JSON.stringify(this.users));

  	this.loginForm = this.formBuilder.group({
            username: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
      
        this.loading = true;

        this.signinService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value).pipe(first()).subscribe(
                data => {
                    this.signinService.loadUser(data.id).subscribe(x => {
                     localStorage.setItem("userProfile", JSON.stringify(x));
                      this.router.navigate(['admin/dashboard']);
                   });

                	
                },
                error => {                  
                	
                  console.log(error);
                    console.log(error.message);
                    this.loading = false;
                    localStorage.setItem("errorMessage", "Usuario o contraseña incorrectos");
                    this.router.navigate(["/signin"]);
                    this.fallologin = "Usuario o contraseña incorrectos";
                });
           
    }
}
