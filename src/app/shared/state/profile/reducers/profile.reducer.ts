import {  ProfileActions } from '../actions';
import {Study} from '../../../models/study.model';
import {User} from '../../../models/user.model';

export interface ProfileState {
  error: string | null;
  user: User;
  pending: boolean;
}

export const initialState: ProfileState = {
  error: null,
  user: null,
    pending:false,
};

export function reducer(
  state = initialState,
  action: ProfileActions.All
): ProfileState {

  switch (action.type) {
    case ProfileActions.GET_USER_SUCCESS: {
      return {
        ...state,
        // user: action.payload,
        error: null,
        user: action.payload,
          pending:false,
      };
    }
      default: {
          return state;
      }
  }
}
