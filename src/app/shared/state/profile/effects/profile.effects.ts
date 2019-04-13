import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, exhaustMap, map, mergeMap, tap} from 'rxjs/operators';
import {  ProfileActions} from '../actions';
import { User} from '../../../models/user.model';
import {Action} from '@ngrx/store';
import {ProfileService} from '../../../services/profile.service';
import {AppSettings} from '../../../app.settings';

@Injectable()
export class ProfileEffects {


  constructor(
    private actions$: Actions,
    private router: Router,
    private profileService: ProfileService
  ) {
  }
    @Effect()
    GetUser$: Observable<Action> = this.actions$.pipe(
        ofType<ProfileActions.GetUser>(ProfileActions.GET_USER),
    map(action => action.payload),
    exhaustMap((id: number) =>
    this.profileService.getUser(id).pipe(
        map(userAux => new ProfileActions.GetUserSuccess(userAux),
    catchError(error => of(new ProfileActions.GetUserError(error)))
            )
            )),
        );
  @Effect()
  SaveStudy$: Observable <Action> = this.actions$.pipe(
      ofType<ProfileActions.SaveStudy>(ProfileActions.SAVE_STUDY),
      map(action => action.payload),
      exhaustMap((user: User) =>
          this.profileService.updateProfile(user).pipe(
              map(userAux => new ProfileActions.SaveStudySuccess(user),
              catchError(error => of(new ProfileActions.SaveStudyFailure(error)))
          )
      )),
       tap(() => this.router.navigate(['/admin/profile']))
  );
    @Effect()
    UpdateStudy$: Observable <Action> = this.actions$.pipe(
        ofType<ProfileActions.UpdateStudy>(ProfileActions.UPDATE_STUDY),
        map(action => action.payload),
        exhaustMap((user: User) =>
            this.profileService.updateProfile(user).pipe(
                map(() => new ProfileActions.UpdateStudySuccess(user),
                    catchError(error => of(new ProfileActions.UpdateStudyFailure(error)))
                )
            ))
        // ,
        // tap(() => this.router.navigate(['/admin/profile']))
    );

    @Effect()
    UpdateAccount$: Observable <Action> = this.actions$.pipe(
        ofType<ProfileActions.UpdateAccount>(ProfileActions.UPDATE_ACCOUNT),
        map(action => action.payload),
        exhaustMap((user: User) =>
            this.profileService.updateProfile(user).pipe(
                map(() => new ProfileActions.UpdateAccountSuccess(user),
                    catchError(error => of(new ProfileActions.UpdateAccountFailure(error)))
                )
            )),
        tap(() => this.router.navigate(['/admin/profile']))
    );

    @Effect()
    SaveLanguage$: Observable <Action> = this.actions$.pipe(
        ofType<ProfileActions.SaveLanguage>(ProfileActions.SAVE_LANGUAGE),
        map(action => action.payload),
        exhaustMap((user: User) =>
            this.profileService.updateProfile(user).pipe(
                map(userAux => new ProfileActions.SaveLanguageSuccess(user),
                    catchError(error => of(new ProfileActions.SaveLanguageFailure(error)))
                )
            )),
        tap(() => this.router.navigate(['/admin/profile']))
    );


    @Effect()
    UpdateLanguage$: Observable <Action> = this.actions$.pipe(
        ofType<ProfileActions.UpdateLanguage>(ProfileActions.UPDATE_LANGUAGE),
        map(action => action.payload),
        exhaustMap((user: User) =>
            this.profileService.updateProfile(user).pipe(
                map(() => new ProfileActions.UpdateLanguageSuccess(user),
                    catchError(error => of(new ProfileActions.UpdateLanguageFailure(error)))
                )
            )),
        tap(() => this.router.navigate(['/admin/profile']))
    );
}
