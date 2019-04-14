import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import {Store, select} from '@ngrx/store';
import {State} from '../../../reducers';

@Component({
  selector: 'app-offers-profile',
  templateUrl: './offers-profile.component.html'
})
export class OffersProfileComponent implements OnInit {
  offers: Offer[] = [];
  constructor(private profileService: ProfileService, private store: Store<State>) {
    this.selectOffers();
  }

  private selectOffers() {
    this.store.pipe(select(state => state.userState)).subscribe(state => this.offers = state.user.offers);
  }

  ngOnInit() {}
}
