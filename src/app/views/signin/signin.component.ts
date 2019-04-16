import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import * as fromAuth from '../../shared/state/auth/reducers';
import {Credentials} from '../../shared/models/user';
import {LoginPageActions} from '../../shared/state/auth/actions';
import { Store, select } from '@ngrx/store';
import {State} from '../../shared/state/root.reducer';
import {selectErrorState, selectPendingState} from '../../shared/state/auth/selectors/auth.selector';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  pending$ = this.store.pipe(select(selectPendingState));

  error$ = this.store.pipe(select(selectErrorState));
  loginForm: FormGroup;
  submitted = false;
  errorLogin = false;

  constructor(private formBuilder: FormBuilder, private store: Store<State>) {}
  ngOnInit() {
    this.errorLogin = false;
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }
  onSubmit(credentials: Credentials) {
    this.submitted = true;
    this.store.dispatch(new LoginPageActions.Login({ email: credentials.email, password: credentials.password }));
    this.error$.subscribe(error => this.errorLogin = (error != null));
  }

}
