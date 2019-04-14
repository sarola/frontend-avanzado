import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, exhaustMap, map, mergeMap, tap} from 'rxjs/operators';
import {  OffersAction} from '../actions';
import { User} from '../../../models/user.model';
import {Action} from '@ngrx/store';
import {ProfileService} from '../../../services/profile.service';
import {OffersService} from '../../../services/offers.service';

@Injectable()
export class OffersEffects {


  constructor(
    private actions$: Actions,
    private router: Router,
    private offersService: OffersService,
    private profileService: ProfileService
  ) {
  }
    @Effect()
    GetOffer$: Observable<Action> = this.actions$.pipe(
        ofType<OffersAction.GetOffer>(OffersAction.GET_OFFER),
    map(action => action.payload),
    exhaustMap((id: number) =>
    this.offersService.getOffer(id).pipe(
        map(offer => new OffersAction.GetOfferSuccess(offer),
    catchError(error => of(new OffersAction.GetOfferFailure(error)))
            )
            )),
        );
@Effect()
GetOffers$: Observable<Action> = this.actions$.pipe(
    ofType<OffersAction.GetOffers>(OffersAction.GET_OFFERS),
    mergeMap(action =>
        this.offersService.getOffers().pipe(
            map(offer => new OffersAction.GetOffersSuccess(offer),
                catchError(error => of(new OffersAction.GetOffersFailure(error)))
            )
        )),
    );
  @Effect()
  SubscribeOffer$: Observable <Action> = this.actions$.pipe(
      ofType<OffersAction.SubscribeOffer>(OffersAction.SUBSCRIBE_OFFER),
      map(action => action.payload),
      exhaustMap((user: User) =>
          this.profileService.updateProfile(user).pipe(
              map(userAux => new OffersAction.SubscribeOfferSuccess(user),
              catchError(error => of(new OffersAction.SubscribeOfferFailure(error)))
          )
      ))
  );
    @Effect()
    UnSubscribeOffer$: Observable <Action> = this.actions$.pipe(
        ofType<OffersAction.UnSubscribeOffer>(OffersAction.UNSUBSCRIBE_OFFER),
        map(action => action.payload),
        exhaustMap((user: User) =>
            this.profileService.updateProfile(user).pipe(
                map(userAux => new OffersAction.UnSubscribeOfferSuccess(user),
                    catchError(error => of(new OffersAction.UnSubscribeOfferFailure(error)))
                )
            ))
    );
}
