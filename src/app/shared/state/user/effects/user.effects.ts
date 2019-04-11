import { UserState } from '../user.state';
import { environment } from '../../../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import { Action } from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as UserActions from '../actions/user.action';

import { HttpClient } from '@angular/common/http';
import {AppSettings} from '../../../app.settings';

@Injectable()
export class UserEffects {

    constructor(
        private http: HttpClient,
        private actions$: Actions
    ) { }
    @Effect()
    GetUsers$: Observable<Action> = this.actions$.pipe(
    ofType<UserActions.GetUsers>(UserActions.GET_USERS)
        , mergeMap(action =>
            this.http.get(AppSettings.API_ENDPOINT_USERS)
                .pipe(map((data: Response) => {

                    console.log(data);
                    return new UserActions.GetUsersSuccess(data['data']['docs'] as UserState[]);
                })
                , catchError(() => of(new UserActions.GetUserError())))
        ));
}
