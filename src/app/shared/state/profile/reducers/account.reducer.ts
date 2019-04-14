import {  AccountActions } from '../actions';
import {User} from '../../../models/user.model';

export interface AccountState {
  error: string | null;
  user: User;
}

export const initialState: AccountState = {
  error: null,
  user: null,

};

export function reducer(
  state = initialState,
  action: AccountActions.All
): AccountState {

  switch (action.type) {
      case AccountActions.UPDATE_ACCOUNT_SUCCESS: {
          return {
              ...state,
              error: null,
              user: action.payload,
          };
      }
      case AccountActions.UPDATE_ACCOUNT_FAILURE: {
          return {
              ...state,
              error: action.payload,
          };
      }
      default: {
          return state;
      }
  }
}
