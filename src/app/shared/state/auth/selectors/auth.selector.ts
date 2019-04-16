import {
    createSelector,
} from '@ngrx/store';
import {
    UserState,
} from '../reducers/login-page.reducer';
import {State} from '../../root.reducer';
const selectAuth = (state: State) => state.authState;

export const selectAuthState = createSelector(
    selectAuth,
    (state: UserState) => state.user
);

export const selectPendingState = createSelector(
    selectAuth,
    (state: UserState) => state.pending
);

export const selectErrorState = createSelector(
    selectAuth,
    (state: UserState) => state.error
);


