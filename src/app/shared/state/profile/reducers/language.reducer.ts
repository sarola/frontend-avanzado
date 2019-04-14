import { LanguageActions } from '../actions';
import {Study} from '../../../models/study.model';
import {User} from '../../../models/user.model';

export interface LanguageState {
  error: string | null;
  user: User;
}

export const initialState: LanguageState = {
  error: null,
  user: null,

};

export function reducer(
  state = initialState,
  action: LanguageActions.All
): LanguageState {
  switch (action.type) {

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
      default: {
          return state;
      }
  }
}
