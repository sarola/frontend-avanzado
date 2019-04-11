import { createAction, props, union, Action } from '@ngrx/store';
import { Credentials } from '../models/user';
import {User} from '../../../shared/models/user.model';
import {UserState} from '../reducers/login-page.reducer';
export const GET_USERS = '[User] GET_USERS';
export const GET_USER = '[User] GET_USER';
export const LOGIN = '[User] LOGIN';
export const LOGIN_SUCCESS = '[User] LOGIN_SUCCESS';
export const LOGIN_FAILURE = '[User] LOGIN_FAILURE';
export const LOGIN_REDIRECT = '[User] LOGIN_REDIRECT';
export const PROFILE_REDIRECT = '[User] PROFILE_REDIRECT';
export const GET_USER_SUCCESS = '[User] GET_USER_SUCCESS';
export const GET_USER_FAILURE = '[User] GET_USER_FAILURE';


export class GetUsers implements Action {
    readonly type = GET_USERS;
}

export class GetUser implements Action {
    readonly type = GET_USER;
    constructor(public payload: number) {}

}
export class GetUserSuccess implements Action {
    readonly type = GET_USER_SUCCESS;

    constructor(public payload: User) {}

}
export class GetUserFailure implements Action {
    readonly type = GET_USER_FAILURE;

    constructor(public payload: {error: string}) {}

}
// export const login = createAction(
//   '[Login Page] Login',
//   props<{ credentials: Credentials }>()
// );

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

    constructor(public payload: {error: string}) {}

}
export class LoginRedidrect implements Action {
    readonly type = LOGIN_REDIRECT;


}
export class ProfileRedirect implements Action {
    readonly type = PROFILE_REDIRECT;
    constructor(public payload: User) {}

}
export type All = Login | GetUsers | LoginSuccess | LoginFailure | LoginRedidrect | GetUser | GetUserSuccess | GetUserFailure;
