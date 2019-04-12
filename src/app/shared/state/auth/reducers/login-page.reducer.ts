import {  LoginPageActions } from '../actions';
import {User, createNewUser} from '../../../models/user.model';

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
      console.log('error: ' + action.payload);

      return {
        ...state,
        //user: null,
        error: action.payload,
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


    default: {
      return state;
    }
  }
}


export const getError = (state: UserState) => state.error;
export const getPending = (state: UserState) => state.pending;
// export const getUser = (state: UserState) => state;
// export const getUserId = (state: UserState) => state.userId;
