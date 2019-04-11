import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import {
 ProfileActions
} from '../actions';

import {Action} from '@ngrx/store';
import {ProfileService} from '../../../shared/services/profile.service';

@Injectable()
export class ProfileEffects {
  //   @Effect()
  // GetUser$: Observable <Action> = this.actions$.pipe(
  //     ofType<ProfileActions.GetUser>(ProfileActions.GET_USER),
  //     map(action => action.payload),
  //     exhaustMap((id: number) =>
  //       this.profileService.getUser(id).pipe(
  //         map(user => new ProfileActions.GetUserSuccess(user)),
  //         catchError(error => of(new ProfileActions.GetUserFailure(error)))
  //       )
  //     )
  //   );

// @Effect()
// LoginRedirect$: Observable<Action> = this.actions$.pipe(
//             ofType<LoginPageActions.LoginRedidrect>(LoginPageActions.LOGIN_REDIRECT),
//             tap(authed => {
//                 this.router.navigate(['/auth']);
//             })
//         );


  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private router: Router,
  ) {
  }
}
