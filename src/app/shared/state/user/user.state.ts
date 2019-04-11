// user.state.ts
import {User} from '../../models/user.model';

export interface UserState extends User {
    loading: boolean;

    editable: boolean;
    edited: boolean;
    editing: boolean;

    selected: boolean;
    refreshing: boolean;

    create: boolean;

    error: boolean;
}

export  const initializeUserState  = function() {
    return {
        loading: false,

        editable: true,
        edited: false,
        editing: false,

        selected: false,
        refreshing: false,

        create: true,

        error: false,
    };
}

export interface UserListState {
    users: UserState[];
    loading: boolean;
    pending: number;
}

export const  intializeTodoListState = function(){
    return {
        loading: false,
        pending: 0,
    };
}
