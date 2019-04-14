import { Action } from '@ngrx/store';
import {User} from '../../../models/user.model';

export const UPDATE_ACCOUNT = '[Account] UPDATE_ACCOUNT';
export const UPDATE_ACCOUNT_SUCCESS = '[Account] UPDATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT_FAILURE = '[Account] UPDATE_ACCOUNT_FAILURE';





export class UpdateAccount implements Action {
    readonly type = UPDATE_ACCOUNT;
    constructor(public payload: User) {}

}

export class UpdateAccountSuccess implements Action {
    readonly type = UPDATE_ACCOUNT_SUCCESS;

    constructor(public payload: User) {}

}
export class UpdateAccountFailure implements Action {
    readonly type = UPDATE_ACCOUNT_FAILURE;

    constructor(public payload:  string) {}

}



export type All = UpdateAccount | UpdateAccountFailure | UpdateAccountSuccess;
