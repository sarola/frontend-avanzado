import {  ProfileActions } from '../actions';
import {Study} from '../../../models/study.model';
import {User} from '../../../models/user.model';

export interface ProfileState {
  error: string | null;
  pending: boolean;
  user: User;
}

export const initialState: ProfileState = {
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
      return {
        ...state,
        // user: action.payload,
        error: null,
        pending: false,
        user: action.payload,
      };
    }
    case ProfileActions.GET_STUDY_SUCCESS: {
      return {
        ...state,
       // user: action.payload,
        error: null,
        pending: false,
        user: state.user,
    };
    }
    case ProfileActions.GET_STUDY_FAILURE: {
      console.log('error: ' + action.payload);

      return {
        ...state,
        error: action.payload,
        pending: false,
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
        error: action.payload,
        pending: false,
      };
    }
      case ProfileActions.UPDATE_ACCOUNT_SUCCESS: {
          return {
              ...state,
              error: null,
              pending: false,
              user: action.payload,
          };
      }
      case ProfileActions.UPDATE_ACCOUNT_FAILURE: {
          return {
              ...state,
              error: action.payload,
              pending: false,
          };
      }
      case ProfileActions.SAVE_LANGUAGE_SUCCESS: {
          return {
              ...state,
              error: null,
              pending: false,
              user: action.payload,
          };
      }
      case ProfileActions.SAVE_LANGUAGE_FAILURE: {
          return {
              ...state,
              error: action.payload,
              pending: false,
          };
      }
      case ProfileActions.UPDATE_LANGUAGE_SUCCESS: {
          return {
              ...state,
              error: null,
              pending: false,
              user: action.payload,
          };
      }
      case ProfileActions.UPDATE_LANGUAGE_FAILURE: {
          return {
              ...state,
              error: action.payload,
              pending: false,
          };
      }
      default: {
          return state;
      }
  }
}
