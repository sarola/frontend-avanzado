import {  ProfileActions } from '../actions';
import {Study} from '../../../models/study.model';
import {User} from '../../../models/user.model';

export interface ProfileState {
  study: Study;
  error: string | null;
  pending: boolean;
  user: User;
}

export const initialState: ProfileState = {
  study: null,
  error: null,
  pending: false,
  user: null,

};

export function reducer(
  state = initialState,
  action: ProfileActions.All
): ProfileState {
  console.log('state: ' + state + ', action: ' + action);

  switch (action.type) {
    case ProfileActions.GET_USER_SUCCESS: {
      console.log("GET_USER_SUCCESS!!!" + action.payload.name);
      return {
        ...state,
        // user: action.payload,
        error: null,
        pending: false,
        study: null,
        user: action.payload,
      };
    }
    case ProfileActions.GET_STUDY_SUCCESS: {
      return {
        ...state,
       // user: action.payload,
        error: null,
        pending: false,
        study: null,
        user: state.user,
    };
    }
    case ProfileActions.GET_STUDY_FAILURE: {
      console.log('error: ' + action.payload);

      return {
        ...state,
        error: action.payload,
        pending: false,
        study: null,
        user: state.user,
      };
    }

    case ProfileActions.SAVE_STUDY_SUCCESS: {
      console.log('save success!' + action.payload);
      return {
        ...state,
        error: null,
        pending: false,
        user: action.payload,
      };
    }
    case ProfileActions.SAVE_STUDY_FAILURE: {
      return {
        ...state,
        study: null,
        error: action.payload,
        pending: false,
      };
    }
    case ProfileActions.UPDATE_STUDY_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false,
        user: action.payload,
      };
    }
    case ProfileActions.UPDATE_STUDY_FAILURE: {
      return {
        ...state,
        study: null,
        error: action.payload,
        pending: false,
      };
    }
    default: {
      return state;
    }
  }
}
