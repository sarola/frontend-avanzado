import { Action } from '@ngrx/store';
import {Study} from '../../../models/study.model';
import {User} from '../../../models/user.model';
export const GET_STUDY = '[Study] GET_STUDY';
export const GET_STUDY_SUCCESS = '[Study] GET_STUDY_SUCCESS';
export const GET_STUDY_FAILURE = '[Study] GET_STUDY_FAILURE';

export const SAVE_STUDY = '[Study] SAVE_STUDY';
export const SAVE_STUDY_SUCCESS = '[Study] SAVE_STUDY_SUCCESS';
export const SAVE_STUDY_FAILURE = '[Study] SAVE_STUDY_FAILURE';

export const UPDATE_STUDY = '[Study] UPDATE_STUDY';
export const UPDATE_STUDY_SUCCESS = '[Study] UPDATE_STUDY_SUCCESS';
export const UPDATE_STUDY_FAILURE = '[Study] UPDATE_STUDY_FAILURE';

export const GET_USER = '[User] GET_USER';

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


    constructor(public payload: User) {}
}

export class GetUsersError implements Action {
    readonly type = GET_USERS_ERROR;

}

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

export class GetStudy implements Action {
    readonly type = GET_STUDY;
    constructor(public payload: number) {}

}

export class GetStudySuccess implements Action {
    readonly type = GET_STUDY_SUCCESS;

    constructor(public payload: User) {}

}
export class GetStudyFailure implements Action {
    readonly type = GET_STUDY_FAILURE;

    constructor(public payload:  string) {}

}
export class UpdateStudy implements Action {
    readonly type = UPDATE_STUDY;
    constructor(public payload: User) {}

}

export class UpdateStudySuccess implements Action {
    readonly type = UPDATE_STUDY_SUCCESS;

    constructor(public payload: User) {}

}
export class UpdateStudyFailure implements Action {
    readonly type = UPDATE_STUDY_FAILURE;

    constructor(public payload:  string) {}

}
export class SaveStudy implements Action {
    readonly type = SAVE_STUDY;
    constructor(public payload: User) {}

}

export class SaveStudySuccess implements Action {
    readonly type = SAVE_STUDY_SUCCESS;

    constructor(public payload: User) {}

}
export class SaveStudyFailure implements Action {
    readonly type = SAVE_STUDY_FAILURE;

    constructor(public payload:  string) {}

}



export type All = GetStudy | GetStudySuccess | GetStudyFailure | SaveStudy | SaveStudySuccess | SaveStudyFailure
    | GetUser | GetUserSuccess | GetUserError | GetUsers | GetUsersSuccess | GetUsersError | UpdateStudy
    | UpdateStudySuccess | UpdateStudyFailure;
