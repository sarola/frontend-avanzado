import { Component } from '@angular/core';
import { Offer } from '../../../shared/models/offer.model';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { AppStore } from '../../../shared/states/store.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfile } from '../../../shared/states/user';
import { map, switchMap } from 'rxjs/operators';
import { getOfferByID } from '../../../shared/states/offers';
import * as UserActions from '../../../shared/states/user/actions';
@Component({
  selector: 'app-offers-detail-wrapper',
  template: `
    <app-offers-detail
      [user]="user$ | async"
      [offer]="offer$ | async"
      (subscribeOffer)="onSubscribeOffer($event)"
      (unsubscribeOffer)="onUnsubscribeOffer($event)"
    ></app-offers-detail>
  `
})
export class OffersDetailWrapperComponent {
  offer$: Observable<Offer>;
  user$: Observable<User>;
  constructor(private store$: Store<AppStore>, private route: ActivatedRoute) {
    this.user$ = this.store$.select(getProfile);
    this.offer$ = this.route.params.pipe(
      map(({ id }: { id: string }) => Number.parseInt(id)),
      switchMap(id => this.store$.select(getOfferByID(id)))
    );
  }

  onSubscribeOffer(user: User) {
    this.store$.dispatch(new UserActions.UpdateUser(user));
  }
  onUnsubscribeOffer(user: User) {
    this.store$.dispatch(new UserActions.UpdateUser(user));
  }
}
