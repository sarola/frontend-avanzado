import {
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../../../shared/state/root.reducer';
import * as fromProfile from '../reducers/profile.reducer';


export interface ProfileState {
  status: fromProfile.ProfileState;
}

export interface State extends fromRoot.State {
  user: ProfileState;

}

export const reducers: ActionReducerMap<ProfileState, any> = {
  status: fromProfile.reducer,
};

