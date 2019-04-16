import {
    createSelector,
} from '@ngrx/store';
import {
    OfferState,
} from '../reducers/offers.reducer';
import {State} from '../../root.reducer';
const selectOffers = (state: State) => state.offersState;

export const selectOffersState = createSelector(
    selectOffers,
    (state: OfferState) => state.offers
);

export const selectOfferState = createSelector(
    selectOffers,
    (state: OfferState) => state.offer
);

