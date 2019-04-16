import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import {Store, select} from '@ngrx/store';
import {State} from '../../../shared/state/root.reducer';
import {selectOffersState} from '../../../shared/state/offers/selectors/offers.selector';
import {selectProfileState} from '../../../shared/state/profile/selectors/profile.selector';

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

  this.store.pipe(select(selectOffersState)).subscribe(state => this.offers = state);

    let user = null;

    this.store.pipe(select(selectProfileState)).subscribe(state => user = state);
    const studiesOfUser = user.studies;
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
