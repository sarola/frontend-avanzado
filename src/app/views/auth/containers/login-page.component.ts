import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Credentials } from '../../../shared/models/user';
import * as fromAuth from '../../../shared/state/auth/reducers';
import { LoginPageActions } from '../../../shared/state/auth/actions';

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
  pending$ = this.store.pipe(select((state) => state.userState.pending));

  error$ = this.store.pipe(select((state) => state.userState.error));

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    console.log('ola');
  }

  onSubmit(credentials: Credentials) {
    this.store.dispatch(new LoginPageActions.Login({ email: credentials.email, password: credentials.password }));

  }
}
