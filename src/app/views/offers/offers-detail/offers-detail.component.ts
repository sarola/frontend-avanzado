import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import {State} from '../../../reducers';
import {Store, select} from '@ngrx/store';
import {OffersAction} from '../../../shared/state/offers/actions';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.scss']
})
export class OffersDetailComponent implements OnInit {
  offer: Offer;
  user: User;
  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private store: Store<State>
  ) {
    this.store.pipe(select(state => state.userState.user)).subscribe(user => this.user = user);
    this.route.params.subscribe(params => {
      this.store.pipe(select(state => state.offersState.offers)).subscribe(offers => {
        const offerID = +params.id;
        this.offer = (offers.find(offer => offer.id === offerID) || {}) as Offer;
      });
    });
  }

  subscribeOffer() {
    this.user.offers = [...this.user.offers, this.offer];
    this.store.dispatch(new OffersAction.SubscribeOffer(this.user));
    this.router.navigate(['/admin/offers']);
  }
  unsubscribeOffer() {
    this.user.offers = this.user.offers.filter(
      _offer => _offer.id !== this.offer.id
    );
    this.store.dispatch(new OffersAction.SubscribeOffer(this.user));

    this.router.navigate(['/admin/offers']);
  }
  isSubscribe(): boolean {
    return !!this.user.offers.find(_offer => this.offer.id === _offer.id);
  }

  ngOnInit() {}
}
