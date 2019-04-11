import { ProfileActions } from '../actions';
import {User} from '../../../shared/models/user.model';

export interface State {
  error: string | null;
  pending: boolean;
  userId: string;
  user: User;
}

export const initialState: State = {
  error: null,
  pending: false,
  userId: '',
  user: null,
};

export function reducer(
    state = initialState,
    action:
        | ProfileActions.All
): State {
  switch (action.type) {
    case ProfileActions.GET_USER: {
      return {
        ...state,
        userId: '',
        error: null,
        pending: true,
        user: state.user,
      };
    }
    case ProfileActions.GET_USER_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: true,
        user: action.payload,
        userId: action.payload.id.toString(),
      };
    }
    case ProfileActions.GET_USER_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        pending: true,
      };
    }

      // case AuthApiActions.loginSuccess.type: {
      //   return {
      //     ...state,
      //     error: null,
      //     pending: false,
      //   };
      // }
      //
      // case AuthApiActions.loginFailure.type: {
      //   return {
      //     ...state,
      //     error: action.error,
      //     pending: false,
      //   };
      // }

    default: {
      return state;
    }
  }
}
export const getUserId = (state: State) => state.userId;
export const getUser = (state: State) => state.user;

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
