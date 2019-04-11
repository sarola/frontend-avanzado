import { UserState } from '../user.state';

import {User} from '../../../models/user.model';
import {Action} from '@ngrx/store';

export const GET_USER = '[User] GET_TODO';

export const GET_USER_SUCCESS = '[User] GET_USER_SUCCESS';

export const GET_USER_ERROR = '[User] GET_USER_ERROR';


export const GET_USERS = '[User] GET_USERS';

export const GET_USERS_SUCCESS = '[User] GET_USERS_SUCCESS';

export const GET_USERS_ERROR = '[User] GET_USERS_ERROR';



export class GetUsers implements Action {
    readonly type = GET_USERS;

}


export class GetUsersSuccess implements Action {
    readonly type = GET_USERS_SUCCESS;


    constructor(public payload: UserState[]){}


}

export class GetUsersError implements Action {
    readonly type = GET_USERS_ERROR;

}



export class GetUser implements Action {
    readonly type = GET_USER;


    constructor(payload: string){}

}


export class GetUserSuccess implements Action {
    readonly type = GET_USER_SUCCESS;


    constructor(public payload: User){}


}


export class GetUserError implements Action {
    readonly type = GET_USER_ERROR;

}



export type All = GetUser | GetUserSuccess | GetUserError |
    GetUsers | GetUsersSuccess | GetUsersError;
