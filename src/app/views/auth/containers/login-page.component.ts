import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Credentials } from '../models/user';
import * as fromAuth from '../reducers';
import { LoginPageActions } from '../actions';
import {getUser} from '../reducers/login-page.reducer';

@Component({
  selector: 'app-login-page',
  template: `
    <app-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </app-login-form>
  `,
  styles: [],
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    console.log('ola');
  }

  onSubmit(credentials: Credentials) {
    this.store.dispatch(new LoginPageActions.Login({ email: credentials.email, password: credentials.password }));
    //this.store.dispatch(new LoginPageActions.ProfileRedirect(this.store.select(user: )));

  }
}
