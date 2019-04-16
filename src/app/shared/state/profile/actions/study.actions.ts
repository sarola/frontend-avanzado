import { Action } from '@ngrx/store';
import {User} from '../../../models/user.model';

export const SAVE_STUDY = '[Study] SAVE_STUDY';
export const SAVE_STUDY_SUCCESS = '[Study] SAVE_STUDY_SUCCESS';
export const SAVE_STUDY_FAILURE = '[Study] SAVE_STUDY_FAILURE';

export const UPDATE_STUDY = '[Study] UPDATE_STUDY';
export const UPDATE_STUDY_SUCCESS = '[Study] UPDATE_STUDY_SUCCESS';
export const UPDATE_STUDY_FAILURE = '[Study] UPDATE_STUDY_FAILURE';

export const DELETE_STUDY = '[Study] DELETE_STUDY';
export const DELETE_STUDY_SUCCESS = '[Study] DELETE_STUDY_SUCCESS';
export const DELETE_STUDY_FAILURE = '[Study] DELETE_STUDY_FAILURE';



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

export class DeleteStudy implements Action {
    readonly type = DELETE_STUDY;
    constructor(public payload: User) {}

}

export class DeleteStudySuccess implements Action {
    readonly type = DELETE_STUDY_SUCCESS;

    constructor(public payload: User) {}

}
export class DeleteStudyFailure implements Action {
    readonly type = DELETE_STUDY_FAILURE;

    constructor(public payload:  string) {}

}
export type All =  SaveStudy | SaveStudySuccess | SaveStudyFailure
    | UpdateStudy | UpdateStudySuccess | UpdateStudyFailure
    | DeleteStudy | DeleteStudyFailure | DeleteStudySuccess;
