import {AccountActions, LanguageActions, ProfileActions, StudyActions} from '../actions';
import {User} from '../../../models/user.model';

export interface ProfileState {
  error: string | null;
  user: User;
  pending: boolean;
}

export const initialState: ProfileState = {
  error: null,
  user: null,
  pending: false,
};

export function reducer(
  state = initialState,
  action: ProfileActions.All | StudyActions.All | AccountActions.All | LanguageActions.All
): ProfileState {

  switch (action.type) {
    case ProfileActions.GET_USER_SUCCESS: {
      return {
        ...state,
        // user: action.payload,
        error: null,
        user: action.payload,
          pending: false,
      };
    }
    case StudyActions.SAVE_STUDY_SUCCESS: {
      return {
        ...state,
        error: null,
        user: action.payload,
      };
    }
    case StudyActions.SAVE_STUDY_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case StudyActions.UPDATE_STUDY_SUCCESS: {
      return {
        ...state,
        error: null,
        user: action.payload,
      };
    }
    case StudyActions.UPDATE_STUDY_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case StudyActions.DELETE_STUDY_SUCCESS: {
      return {
        ...state,
        error: null,
        user: action.payload,
      };
    }
    case StudyActions.DELETE_STUDY_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case LanguageActions.SAVE_LANGUAGE_SUCCESS: {
      return {
        ...state,
        error: null,
        user: action.payload,
      };
    }
    case LanguageActions.SAVE_LANGUAGE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case LanguageActions.UPDATE_LANGUAGE_SUCCESS: {
      return {
        ...state,
        error: null,
        user: action.payload,
      };
    }
    case LanguageActions.UPDATE_LANGUAGE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case LanguageActions.DELETE_LANGUAGE_SUCCESS: {
      return {
        ...state,
        error: null,
        user: action.payload,
      };
    }
    case LanguageActions.DELETE_LANGUAGE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case AccountActions.UPDATE_ACCOUNT_SUCCESS: {
      console.log('update account succes');
      return {
        ...state,
        error: null,
        user: action.payload,
        pending: false,
      };
    }
    case AccountActions.UPDATE_ACCOUNT_FAILURE: {
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
