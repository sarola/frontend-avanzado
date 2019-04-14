import { Action } from '@ngrx/store';
import {User} from '../../../models/user.model';

export const GET_USER = '[User] GET_USER';
export const GET_USER_SUCCESS = '[User] GET_USER_SUCCESS';
export const GET_USER_ERROR = '[User] GET_USER_ERROR';


export class GetUser implements Action {
    readonly type = GET_USER;


    constructor(public payload: number){}

}


export class GetUserSuccess implements Action {
    readonly type = GET_USER_SUCCESS;


    constructor(public payload: User){}


}


export class GetUserError implements Action {
    readonly type = GET_USER_ERROR;
    constructor(public payload: string) {}

}


export type All = GetUser | GetUserSuccess | GetUserError;
