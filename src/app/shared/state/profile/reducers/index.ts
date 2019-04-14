import {
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../../../reducers';
import * as fromProfile from '../reducers/profile.reducer';
import {StudyState} from './study.reducer';
import {AccountState} from './account.reducer';
import {LanguageState} from './language.reducer';

export interface ProfileState {
  status: fromProfile.ProfileState;
}

export interface State extends fromRoot.State {
  user: ProfileState;
  study: StudyState;
  language: LanguageState;
  account: AccountState;

}

export const reducers: ActionReducerMap<ProfileState, any> = {
  status: fromProfile.reducer,
};

