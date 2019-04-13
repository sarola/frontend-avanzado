import { Action } from '@ngrx/store';
import {Offer} from '../../../models/offer.model';
import {User} from '../../../models/user.model';

export const GET_OFFERS = '[Offer] GET_OFFERS';
export const GET_OFFERS_SUCCESS = '[Offer] GET_OFFERS_SUCCESS';
export const GET_OFFERS_FAILURE = '[Offer] GET_OFFERS_FAILURE';

export const GET_OFFER = '[Offer] GET_OFFER';
export const GET_OFFER_SUCCESS = '[Offer] GET_OFFER_SUCCESS';
export const GET_OFFER_FAILURE = '[Offer] GET_OFFER_FAILURE';

export const SUBSCRIBE_OFFER = '[Offer] SUBSCRIBE_OFFER';
export const SUBSCRIBE_OFFER_SUCCESS = '[Offer] SUBSCRIBE_OFFER_SUCCESS';
export const SUBSCRIBE_OFFER_FAILURE = '[Offer] SUBSCRIBE_OFFER_FAILURE';

export const UNSUBSCRIBE_OFFER = '[Offer] UNSUBSCRIBE_OFFER';
export const UNSUBSCRIBE_OFFER_SUCCESS = '[Offer] UNSUBSCRIBE_OFFER_SUCCESS';
export const UNSUBSCRIBE_OFFER_FAILURE = '[Offer] UNSUBSCRIBE_OFFER_FAILURE';

export class GetOffers implements Action {
    readonly type = GET_OFFERS;

}

export class GetOffersSuccess implements Action {
    readonly type = GET_OFFERS_SUCCESS;

    constructor(public payload: Offer[]) {}

}
export class GetOffersFailure implements Action {
    readonly type = GET_OFFERS_FAILURE;

    constructor(public payload: string) {
    }

}
export class GetOffer implements Action {
    readonly type = GET_OFFER;
    constructor(public payload: number) {}

}

export class GetOfferSuccess implements Action {
    readonly type = GET_OFFER_SUCCESS;

    constructor(public payload: Offer) {}

}
export class GetOfferFailure implements Action {
    readonly type = GET_OFFER_FAILURE;

    constructor(public payload:  string) {}

}

export class SubscribeOffer implements Action {
    readonly type = SUBSCRIBE_OFFER;
    constructor(public payload: User) {}

}

export class SubscribeOfferSuccess implements Action {
    readonly type = SUBSCRIBE_OFFER_SUCCESS;

    constructor(public payload: User) {}

}
export class SubscribeOfferFailure implements Action {
    readonly type = SUBSCRIBE_OFFER_FAILURE;

    constructor(public payload:  string) {}

}
export class UnSubscribeOffer implements Action {
    readonly type = UNSUBSCRIBE_OFFER;
    constructor(public payload: User) {}

}

export class UnSubscribeOfferSuccess implements Action {
    readonly type = UNSUBSCRIBE_OFFER_SUCCESS;

    constructor(public payload: User) {}

}
export class UnSubscribeOfferFailure implements Action {
    readonly type = UNSUBSCRIBE_OFFER_FAILURE;

    constructor(public payload:  string) {}

}


export type All = GetOffer | GetOfferSuccess | GetOfferFailure | SubscribeOffer | SubscribeOfferSuccess | SubscribeOfferFailure
    | GetOffers | GetOffersSuccess | GetOffersFailure | UnSubscribeOffer | UnSubscribeOfferFailure | UnSubscribeOfferSuccess;
