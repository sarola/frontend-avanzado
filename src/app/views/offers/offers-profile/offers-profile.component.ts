import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import {Store, select} from '@ngrx/store';
import {State} from '../../../shared/state/root.reducer';
import {selectOffersProfileState} from '../../../shared/state/profile/selectors/profile.selector';

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
    this.store.pipe(select(selectOffersProfileState)).subscribe(state => this.offers = state);
  }

  ngOnInit() {}
}
