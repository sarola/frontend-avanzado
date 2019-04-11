import { createAction, props, union, Action } from '@ngrx/store';
import {User} from '../../../shared/models/user.model';
export const GET_USERS = '[User] GET_USERS';
export const GET_USERS_SUCCESS = '[User] GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = '[User] GET_USERS_FAILURE';
export const GET_USER = '[User] GET_USER';
export const GET_USER_SUCCESS = '[User] GET_USER_SUCCESS';
export const GET_USER_FAILURE = '[User] GET_USER_FAILURE';


export class GetUsers implements Action {
    readonly type = GET_USERS;
}
// export const login = createAction(
//   '[Login Page] Login',
//   props<{ credentials: Credentials }>()
// );

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
export class GetUserS implements Action {
    readonly type = GET_USERS;

    constructor(public payload: string) {}
}

export class GetUsersSuccess implements Action {
    readonly type = GET_USERS_SUCCESS;

    constructor(public payload: User) {}

}
export class GetUsersFailure implements Action {
    readonly type = GET_USERS_FAILURE;

    constructor(public payload: {error: string}) {}

}
export type All = GetUser | GetUsers | GetUserSuccess | GetUsersSuccess | GetUserFailure | GetUsersFailure;
