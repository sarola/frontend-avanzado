import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../../../shared/state/root.reducer';
import * as fromLoginPage from '../reducers/login-page.reducer';
import {UserState} from '../reducers/login-page.reducer';

export interface AuthState {
  status: fromLoginPage.UserState;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState, any> = {
  status: fromLoginPage.reducer,
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);


// const selectUser = (state: State) => state.authState;
// export const selecSelectedUser = createSelector(
//     selectUser,
//     (state: UserState) => state
// );

// export const getUser = createSelector(selectAuthStatusState, fromLoginPage.getUser);
// export const getLoggedIn = createSelector(getUser, user => !!user);

