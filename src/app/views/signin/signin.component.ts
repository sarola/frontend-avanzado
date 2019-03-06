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
  constructor(private signinService: SigninService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private profileService: ProfileService) {

  console.log("constructor"); }

  ngOnInit() {
    console.log("iniciamos");

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



 	// this.signinService.getUsers().subscribe((data:  {id, username, password}[]) => {console.log("data: " + data);this.users =data;
  // 	console.log("users1:" + JSON.stringify(data));
  // 	console.log("users1:" + this.users);
  // 	localStorage.setItem("users", this.users);
  // 	for(let u of this.users){
  // 		console.log("us: " + u.username + " - " + u.password);
  // 	}


  		
//});

  	this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';



  	  // get return url from route parameters or default to '/'


  }

  get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
      
        this.loading = true;

        this.signinService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
                data => {
                	

                    console.log("user id: " + data.id);
                   this.signinService.loadUser(data.id).subscribe(x => {
                     localStorage.setItem("userProfile", JSON.stringify(x));
                      this.router.navigate(['admin/dashboard']);
                    //localStorage.removeItem("errorMessage");

                   });

                	
                },
                error => {                  
                	
                  console.log(error);
                    console.log(error.message);
                    this.loading = false;
                    localStorage.setItem("errorMessage", "Usuario o contraseña incorrectos");
                    console.log("anadimos localstorage");
                    this.router.navigate(["/signin"]);
                    this.fallologin = "Usuario o contraseña incorrectos";
                });
           
    }
}
