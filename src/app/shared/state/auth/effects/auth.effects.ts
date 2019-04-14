import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import {
  LoginPageActions,
} from '../actions';
import { Credentials } from '../../../models/user';
import {Action} from '@ngrx/store';
import {SigninService} from '../../../services/signin.service';
import {ProfileService} from '../../../services/profile.service';

@Injectable()
export class AuthEffects {
    @Effect()
  Login$: Observable <Action> = this.actions$.pipe(
      ofType<LoginPageActions.Login>(LoginPageActions.LOGIN),
      map(action => action.payload),
      exhaustMap((auth: Credentials) =>
        this.signinService.login({email: auth.email, password: auth.password}).pipe(
          map(user => user ? new LoginPageActions.LoginSuccess(user[0]) : new LoginPageActions.LoginFailure("usuario incorrecto")),
          catchError(error => of(new LoginPageActions.LoginFailure(error)))
        )
      )
    );
    @Effect()
    LoginSuccess$: Observable <Action> = this.actions$.pipe(
        ofType<LoginPageActions.LoginSuccess>(LoginPageActions.LOGIN_SUCCESS),
        map(action => action.payload),
        map(user => new LoginPageActions.ProfileRedirect(user )),
        catchError(error => of(new LoginPageActions.LoginFailure(error))),
        tap(() => this.router.navigate(['/admin/profile']))
    );

  constructor(
    private actions$: Actions,
    private signinService: SigninService,
    private router: Router,
  ) {
  }
}
