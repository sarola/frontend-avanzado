import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Credentials } from '../../../shared/models/user';
@Component({
  selector: 'app-login-form',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <img src="/assets/img/uoc_logo.png" />

          <h2>Login</h2>

          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div *ngIf="errorLogin" class="alert alert-danger">
              <button type="button" class="close" data-dismiss="alert">
                &times;
              </button>

              There is an error in email or password
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                  type="text"
                  id="email"
                  formControlName="email"
                  class="form-control"
                  [ngClass]="{
              'is-invalid': submitted && loginForm.controls.email.errors
            }"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                  type="password"
                  id="password"
                  formControlName="password"
                  class="form-control"
                  [ngClass]="{
              'is-invalid': submitted && loginForm.controls.password.errors
            }"
              />
            </div>
            <div class="form-group">
              <button [disabled]="loginForm.invalid" class="btn btn-primary">
                Login
              </button>
              <a routerLink="/forgot-password" class="btn btn-link"
              >Remember password</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin: 72px 0;
      }

      .mat-form-field {
        width: 100%;
        min-width: 300px;
      }

      mat-card-title,
      mat-card-content {
        display: flex;
        justify-content: center;
      }

      .loginError {
        padding: 16px;
        width: 300px;
        color: white;
        background-color: red;
      }

      .loginButtons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    `,
  ],
})
export class LoginFormComponent implements OnInit {

  @Input()
  set pending(isPending: boolean) {
    // if (isPending) {
    //   this.loginForm.disable();
    // } else {
    //   this.loginForm.enable();
    // }
  }

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Credentials>();
  loginForm: FormGroup;
  errorLogin = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.submitted.emit(this.loginForm.value);
    }
  }
}
