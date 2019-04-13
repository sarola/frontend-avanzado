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


export const UPDATE_ACCOUNT = '[Account] UPDATE_ACCOUNT';
export const UPDATE_ACCOUNT_SUCCESS = '[Account] UPDATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT_FAILURE = '[Account] UPDATE_ACCOUNT_FAILURE';

export const SAVE_LANGUAGE = '[Account] SAVE_LANGUAGE';
export const SAVE_LANGUAGE_SUCCESS = '[Account] SAVE_LANGUAGE_SUCCESS';
export const SAVE_LANGUAGE_FAILURE = '[Account] SAVE_LANGUAGE_FAILURE';

export const UPDATE_LANGUAGE = '[Account] UPDATE_LANGUAGE';
export const UPDATE_LANGUAGE_SUCCESS = '[Account] UPDATE_LANGUAGE_SUCCESS';
export const UPDATE_LANGUAGE_FAILURE = '[Account] UPDATE_LANGUAGE_FAILURE';

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


export class UpdateLanguage implements Action {
    readonly type = UPDATE_LANGUAGE;
    constructor(public payload: User) {}

}

export class UpdateLanguageSuccess implements Action {
    readonly type = UPDATE_LANGUAGE_SUCCESS;

    constructor(public payload: User) {}

}
export class UpdateLanguageFailure implements Action {
    readonly type = UPDATE_LANGUAGE_FAILURE;

    constructor(public payload:  string) {}

}

export class SaveLanguage implements Action {
    readonly type = SAVE_LANGUAGE;
    constructor(public payload: User) {}

}

export class SaveLanguageSuccess implements Action {
    readonly type = SAVE_LANGUAGE_SUCCESS;

    constructor(public payload: User) {}

}
export class SaveLanguageFailure implements Action {
    readonly type = SAVE_LANGUAGE_FAILURE;

    constructor(public payload:  string) {}

}


export type All = GetStudy | GetStudySuccess | GetStudyFailure | SaveStudy | SaveStudySuccess | SaveStudyFailure
    | GetUser | GetUserSuccess | GetUserError | GetUsers | GetUsersSuccess | GetUsersError | UpdateStudy
    | UpdateStudySuccess | UpdateStudyFailure  | UpdateAccount | UpdateAccountFailure | UpdateAccountSuccess
    | SaveLanguage | SaveLanguageFailure    | SaveLanguageSuccess | UpdateLanguage | UpdateLanguageFailure | UpdateLanguageSuccess;
