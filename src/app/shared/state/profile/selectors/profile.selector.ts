import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store';
import {
    ProfileState,
} from '../reducers/profile.reducer';
import {State} from '../reducers';
const selectProfile = (state: State) => state.userState;

export const selectProfileState = createSelector(
    selectProfile,
    (state: ProfileState) => state.user
);

export const selectStudiesState = createSelector(
    selectProfile,
    (state: ProfileState) => state.user.studies
);
export const selectLanguagesState = createSelector(
    selectProfile,
    (state: ProfileState) => state.user.languages
);
export const selectOffersProfileState = createSelector(
    selectProfile,
    (state: ProfileState) => state.user.offers
);


