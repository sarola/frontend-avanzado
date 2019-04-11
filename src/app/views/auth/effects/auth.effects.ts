import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import {
  LoginPageActions,
  AuthActions,
  AuthApiActions,
} from '../actions';
import { Credentials } from '../models/user';
import {Action} from '@ngrx/store';
import {SigninService} from '../../signin/signin.service';
import {User} from '../../../shared/models/user.model';
import {ProfileService} from '../../../shared/services/profile.service';

@Injectable()
export class AuthEffects {
    @Effect()
  Login$: Observable <Action> = this.actions$.pipe(
      ofType<LoginPageActions.Login>(LoginPageActions.LOGIN),
      map(action => action.payload),
      exhaustMap((auth: Credentials) =>
        this.signinService.login({email: auth.email, password: auth.password}).pipe(
           // map(user => this.profileService.user = user [0]),
          map(user => new LoginPageActions.LoginSuccess(user[0])),
          catchError(error => of(new LoginPageActions.LoginFailure(error)))
        )
      )
      // ,
      // tap(() => this.router.navigate(['/admin/dashboard', this.profileService.user.id]))
    );
@Effect()
GetUser$: Observable <Action> = this.actions$.pipe(
    ofType<LoginPageActions.GetUser>(LoginPageActions.GET_USER),
    map(action => action.payload),
    exhaustMap((id: number) =>
        this.profileService.getUser(id).pipe(
            map(user => new LoginPageActions.GetUserSuccess(user)),
            catchError(error => of(new LoginPageActions.LoginFailure(error)))
        )
    )
    // ,
    // tap(() => this.router.navigate(['/admin/dashboard', this.profileService.user.id]))
);

    @Effect()
    LoginSuccess$: Observable <Action> = this.actions$.pipe(
        ofType<LoginPageActions.LoginSuccess>(LoginPageActions.LOGIN_SUCCESS),
        map(action => action.payload),
        map(user => new LoginPageActions.ProfileRedirect(user )),
        catchError(error => of(new LoginPageActions.LoginFailure(error))),
        tap(() => this.router.navigate(['/admin/profile']))
    );
@Effect()
LoginRedirect$: Observable<Action> = this.actions$.pipe(
            ofType<LoginPageActions.LoginRedidrect>(LoginPageActions.LOGIN_REDIRECT),
            tap(authed => {
                this.router.navigate(['/auth']);
            })
        );


  constructor(
    private actions$: Actions,
    private signinService: SigninService,
    private profileService: ProfileService,
    private router: Router,
  ) {
  }
}
