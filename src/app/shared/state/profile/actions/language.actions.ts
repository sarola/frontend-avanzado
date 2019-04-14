import { Action } from '@ngrx/store';
import {User} from '../../../models/user.model';

export const SAVE_LANGUAGE = '[Account] SAVE_LANGUAGE';
export const SAVE_LANGUAGE_SUCCESS = '[Account] SAVE_LANGUAGE_SUCCESS';
export const SAVE_LANGUAGE_FAILURE = '[Account] SAVE_LANGUAGE_FAILURE';

export const UPDATE_LANGUAGE = '[Account] UPDATE_LANGUAGE';
export const UPDATE_LANGUAGE_SUCCESS = '[Account] UPDATE_LANGUAGE_SUCCESS';
export const UPDATE_LANGUAGE_FAILURE = '[Account] UPDATE_LANGUAGE_FAILURE';




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


export type All = SaveLanguage | SaveLanguageFailure    | SaveLanguageSuccess
    | UpdateLanguage | UpdateLanguageFailure | UpdateLanguageSuccess;
