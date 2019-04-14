import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import {Store, select} from '@ngrx/store';
import {State} from '../../../reducers';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html'
})
export class OffersListComponent implements OnInit {
  offers: Offer[] = [];
  offersStudy: Offer[] = [];
  offersOther: Offer[] = [];
  constructor(
    private profileService: ProfileService,
    private offersService: OffersService,
    private store: Store<State>
  ) {
    this.selectOffers();
  }

  private selectOffers() {

  this.store.pipe(select(state => state.offersState)).subscribe(state => this.offers = state.offers);

    let user = null;
    this.store.pipe(select(state => state.userState)).subscribe(state => user = state.user);

    const studiesOfUser = user.studies;
    console.log("user ofers: " + user.name);
    const offersOfUser = user.offers;
    this.offersStudy = this.offers
      .filter(offer =>
        studiesOfUser.some(study => study.uid === offer.category.uid)
      )
      .map(offer => {
        const offerUser = !!offersOfUser.find(
          _offerUser => _offerUser.id === offer.id
        );
        return { ...offer, subscribe: offerUser };
      });

    this.offersOther = this.offers.filter(offer =>
      studiesOfUser.every(study => study.uid !== offer.category.uid)
    );
  }

  ngOnInit() {}
}
