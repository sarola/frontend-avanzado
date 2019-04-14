import {StudyActions} from '../actions';
import {User} from '../../../models/user.model';

export interface StudyState {
  user: User;
  error: string | null;
}

export const initialState: StudyState = {
  user: null,
    error: null,

};

export function reducer(
  state = initialState,
  action: StudyActions.All
): StudyState {

  switch (action.type) {
    case StudyActions.SAVE_STUDY_SUCCESS: {
      console.log('save success!' + action.payload);
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
      default: {
          return state;
      }
  }
}
