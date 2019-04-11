import { AuthApiActions, AuthActions } from '../actions';
import { User } from '../../../shared/models/user.model';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export function reducer(
  state = initialState,
  action: AuthApiActions.AuthApiActionsUnion | AuthActions.AuthActionsUnion
): State {
  switch (action.type) {
    case AuthApiActions.loginSuccess.type: {

      return {
        ...state,
        user: state.user,
      };
    }

    case AuthActions.logout.type: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state: State) => state.user;
