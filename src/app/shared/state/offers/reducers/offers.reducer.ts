import { OffersAction } from '../actions';
import {Offer} from '../../../models/offer.model';

export interface OfferState {
  error: string | null;
  pending: boolean;
  offer: Offer;
  offers: Offer[];
}

export const initialState: OfferState = {
  error: null,
  pending: false,
    offer: null,
    offers: [],
};

export function reducer(
  state = initialState,
  action: OffersAction.All
): OfferState {
  console.log('state: ' + state + ', action: ' + action);

  switch (action.type) {
    case OffersAction.GET_OFFER_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false,
        offer: action.payload,
      };
    }
    case OffersAction.GET_OFFER_FAILURE: {
      return {
        ...state,
        error: null,
        pending: false,
    };
    }
      case OffersAction.GET_OFFERS_SUCCESS: {
          return {
              ...state,
              error: null,
              pending: false,
              offers: action.payload,
          };
      }
      case OffersAction.GET_OFFERS_FAILURE: {
          return {
              ...state,
              error: null,
              pending: false,
          };
      }
    case OffersAction.SUBSCRIBE_OFFER_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false,
      };
    }

    case OffersAction.SUBSCRIBE_OFFER_FAILURE: {
      return {
        ...state,
        error: null,
        pending: false,
      };
    }
    case OffersAction.UNSUBSCRIBE_OFFER_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false,
      };
    }

    case OffersAction.UNSUBSCRIBE_OFFER_FAILURE: {
      return {
        ...state,
        error: null,
        pending: false,
      };
    }
      default: {
          return state;
      }
  }
}
