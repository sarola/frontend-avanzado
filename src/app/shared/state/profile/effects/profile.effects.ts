import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';
import {ProfileActions, StudyActions, AccountActions, LanguageActions} from '../actions';
import { User} from '../../../models/user.model';
import {Action} from '@ngrx/store';
import {ProfileService} from '../../../services/profile.service';

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
      ofType<StudyActions.SaveStudy>(StudyActions.SAVE_STUDY),
      map(action => action.payload),
      exhaustMap((user: User) =>
          this.profileService.updateProfile(user).pipe(
              map(userAux => new StudyActions.SaveStudySuccess(user),
              catchError(error => of(new StudyActions.SaveStudyFailure(error)))
          )
      )),
       tap(() => this.router.navigate(['/admin/profile']))
  );
    @Effect()
    UpdateStudy$: Observable <Action> = this.actions$.pipe(
        ofType<StudyActions.UpdateStudy>(StudyActions.UPDATE_STUDY),
        map(action => action.payload),
        exhaustMap((user: User) =>
            this.profileService.updateProfile(user).pipe(
                map(() => new StudyActions.UpdateStudySuccess(user),
                    catchError(error => of(new StudyActions.UpdateStudyFailure(error)))
                )
            ))
    );

    @Effect()
    UpdateAccount$: Observable <Action> = this.actions$.pipe(
        ofType<AccountActions.UpdateAccount>(AccountActions.UPDATE_ACCOUNT),
        map(action => action.payload),
        exhaustMap((user: User) =>
            this.profileService.updateProfile(user).pipe(
                map(useraux => new AccountActions.UpdateAccountSuccess(user),
                    catchError(error => of(new AccountActions.UpdateAccountFailure(error)))
                )
            ))
    );

    @Effect()
    SaveLanguage$: Observable <Action> = this.actions$.pipe(
        ofType<LanguageActions.SaveLanguage>(LanguageActions.SAVE_LANGUAGE),
        map(action => action.payload),
        exhaustMap((user: User) =>
            this.profileService.updateProfile(user).pipe(
                map(userAux => new LanguageActions.SaveLanguageSuccess(user),
                    catchError(error => of(new LanguageActions.SaveLanguageFailure(error)))
                )
            )),
        tap(() => this.router.navigate(['/admin/profile']))
    );
    @Effect()
    UpdateLanguage$: Observable <Action> = this.actions$.pipe(
        ofType<LanguageActions.UpdateLanguage>(LanguageActions.UPDATE_LANGUAGE),
        map(action => action.payload),
        exhaustMap((user: User) =>
            this.profileService.updateProfile(user).pipe(
                map(() => new LanguageActions.UpdateLanguageSuccess(user),
                    catchError(error => of(new LanguageActions.UpdateLanguageFailure(error)))
                )
            )),
        tap(() => this.router.navigate(['/admin/profile']))
    );
}
