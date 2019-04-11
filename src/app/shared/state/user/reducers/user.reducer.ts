import * as UserModel from '../../../models/user.model';
import { initializeUserState, UserListState, UserState } from '../user.state';
import * as UserActions from '../actions/user.action';

export type Action = UserActions.All;

const defaultUserStates: UserState[] = [
    {
        ...UserModel.createNewUser(),
        ...initializeUserState()
    }
]


const defaultState: UserListState = {
    users: defaultUserStates,
    loading: false,
    pending: 0
}

export function UserReducer(state = defaultState, action: Action) {
    console.log(state, action);

    switch (action.type) {
        case UserActions.GET_USERS: {

            return { ...state, loaded: false, loading: true };
        }
        case UserActions.GET_USERS_SUCCESS: {

            return {
                ...state,
                users: [
                    ...action.payload,
                    defaultUserStates[0]
                ],
                loading: false
            };
        }
    }
}
