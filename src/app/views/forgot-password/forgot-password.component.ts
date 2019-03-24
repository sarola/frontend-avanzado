import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  rememberPasswordForm: FormGroup;
  loading = false;
  submitted= false;
  rememberPasswordMessage = "";
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute)
   {}

  ngOnInit() {

this.rememberPasswordForm = this.formBuilder.group({
            email: ['', [Validators.email, Validators.required]]
        });
  }
  onSubmit(){
  	this.loading = true;
  	this.submitted = true;
  	this.rememberPasswordMessage = "Su contraseña se ha enviado al correo indicado";
  	this.loading = false;
  }

}
