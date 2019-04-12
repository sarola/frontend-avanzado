import { createAction, props, union, Action } from '@ngrx/store';
import { Credentials } from '../../../models/user';
import {User} from '../../../models/user.model';
import {UserState} from '../reducers/login-page.reducer';
export const GET_USERS = '[User] GET_USERS';
export const GET_USER = '[User] GET_USER';
export const LOGIN = '[User] LOGIN';
export const LOGIN_SUCCESS = '[User] LOGIN_SUCCESS';
export const LOGIN_FAILURE = '[User] LOGIN_FAILURE';
export const LOGIN_REDIRECT = '[User] LOGIN_REDIRECT';
export const PROFILE_REDIRECT = '[User] PROFILE_REDIRECT';



export class GetUsers implements Action {
    readonly type = GET_USERS;
}

export class GetUser implements Action {
    readonly type = GET_USER;
    constructor(public payload: number) {}

}


export class Login implements Action {
    readonly type = LOGIN;

    constructor(public payload: Credentials) {}
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload: User) {}

}
export class LoginFailure implements Action {
    readonly type = LOGIN_FAILURE;

    constructor(public payload: string) {}

}
export class LoginRedidrect implements Action {
    readonly type = LOGIN_REDIRECT;


}
export class ProfileRedirect implements Action {
    readonly type = PROFILE_REDIRECT;
    constructor(public payload: User) {}

}
export type All = Login | GetUsers | LoginSuccess | LoginFailure | LoginRedidrect | GetUser;
