import { AuthApiActions, LoginPageActions } from '../actions';
import {User, createNewUser} from '../../../shared/models/user.model';
import {Login} from '../actions/login-page.actions';

export interface UserState{
  user: User;
  error: string | null;
  pending: boolean;
  userId: number;
}

export const initialState: UserState = {
 // user: createNewUser(),
  user: createNewUser(),
  error: null,
  pending: false,
  userId: -1,

};

export function reducer(
  state = initialState,
  action:
      | LoginPageActions.LoginSuccess
      | LoginPageActions.LoginFailure
    | LoginPageActions.Login
  | LoginPageActions.ProfileRedirect
  | LoginPageActions.GetUserSuccess
      | LoginPageActions.GetUser
): UserState {
  console.log('state: ' + state + ', action: ' + action.payload);

  switch (action.type) {
    case LoginPageActions.LOGIN: {
      return {
        ...state,
        //user: null,
        error: null,
        pending: true,
        userId: -1,
      };
    }
    case LoginPageActions.LOGIN_SUCCESS: {
      console.log("loginsuccessss000");
      console.log("payload: " + action.payload.name);
      return {
        ...state,
       // user: action.payload,
        error: null,
        pending: true,
        userId: action.payload.id,
        user: action.payload
    };
    }
    case LoginPageActions.LOGIN_FAILURE: {
      return {
        ...state,
        //user: null,
        error: action.payload.error,
        pending: true,
        userId : -1,
      };
    }
    case LoginPageActions.PROFILE_REDIRECT: {
      return {
        ...state,
       // user: action.payload,
        error: null,
        pending: true,
      //  name: action.payload.name,
        userId: action.payload.id,
        user: action.payload,

    };
    }
    case LoginPageActions.GET_USER_SUCCESS: {
      console.log('id user: ' + action.payload.id);
      return {
        ...state,
        // user: action.payload,
        error: null,
        pending: true,
        userId: action.payload.id,
        user: action.payload,
        // name: action.payload.name,

      };
    }

    default: {
      return state;
    }
  }
}


export const getError = (state: UserState) => state.error;
export const getPending = (state: UserState) => state.pending;
export const getUser = (state: UserState) => state;
export const getUserId = (state: UserState) => state.userId;
