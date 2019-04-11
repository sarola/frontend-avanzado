import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as fromAuth from '../reducers/auth.reducer';
import * as fromLoginPage from '../reducers/login-page.reducer';
import {UserState} from '../reducers/login-page.reducer';

export interface AuthState {
  status: fromAuth.State;
  loginPage: fromLoginPage.UserState;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState, any> = {
  status: fromAuth.reducer,
  loginPage: fromLoginPage.reducer,
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);


const selectUser = (state: State) => state.userState;
export const selecSelectedUser = createSelector(
    selectUser,
    (state: UserState) => state
);

// export const getUser = createSelector(selectAuthStatusState, fromLoginPage.getUser);
// export const getLoggedIn = createSelector(getUser, user => !!user);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);
