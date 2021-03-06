import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Offer } from '../../../shared/models/offer.model';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html'
})
export class OffersListComponent implements OnChanges {
  @Input() user: User;
  @Input() offers: Offer[];
  offersStudy: Offer[] = [];
  offersOther: Offer[] = [];
  displayedColumns = ['job', 'company', 'category', 'date', 'province', 'municipe', 'subscribe', 'actions'];
  displayedColumnsOthers = ['job', 'company', 'category', 'date', 'province', 'municipe'];

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && changes.offers) {
      this.selectOffers();
    }
  }

  private selectOffers() {
    const studiesOfUser = this.user.studies;
    const offersOfUser = this.user.offers;
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
}
