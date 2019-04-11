import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as fromProfile from '../reducers/profile.reducer';

export interface ProfileState {
  status: fromProfile.State;
}

export interface State extends fromRoot.State {
  profile: ProfileState;
}

export const reducers: ActionReducerMap<ProfileState, any> = {
  status: fromProfile.reducer,
};

// export const selectProfileState = createFeatureSelector<State, ProfileState>('profile');
//
// export const selectProfileStatusState = createSelector(
//     selectProfileState,
//   (state: ProfileState) => state.status
// );
// export const getUser = createSelector(selectProfileStatusState, fromProfile.getUser);
// export const getLoggedIn = createSelector(getUser, user => !!user);
//
// export const selectProfileState = createSelector(
//   selectAuthState,
//   (state: ProfileState) => state.loginPage
// );
// export const getProfileError = createSelector(
//   selectProfile,
//   fromLoginPage.getError
// );
// export const getProfilePending = createSelector(
//   selectLoginPageState,
//   fromLoginPage.getPending
// );
