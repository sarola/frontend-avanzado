import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Offer } from '../../../shared/models/offer.model';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-offers-profile',
  templateUrl: './offers-profile.component.html'
})
export class OffersProfileComponent implements OnChanges {
  @Input() user: User;
  offers: Offer[] = [];
  displayedColumns = ['job', 'company', 'category', 'date', 'province', 'municipe', 'actions'];

  constructor() {}
  ngOnChanges() {
    this.offers = this.user.offers;
  }
}
