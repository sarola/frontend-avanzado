import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Offer } from '../../../shared/models/offer.model';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.scss']
})
export class OffersDetailComponent {
  @Input() offer: Offer;
  @Input() user: User;
  @Output() subscribeOffer: EventEmitter<User> = new EventEmitter<User>();
  @Output() unsubscribeOffer: EventEmitter<User> = new EventEmitter<User>();

  constructor() {}

  subscribe() {
    const offers = [...this.user.offers, this.offer];
    const user = {
      ...this.user,
      offers
    };
    this.subscribeOffer.emit(user);
  }
  unsubscribe() {
    const offers = this.user.offers.filter(
      _offer => _offer.id !== this.offer.id
    );
    const user = {
      ...this.user,
      offers
    };
    this.unsubscribeOffer.emit(user);
  }
  isSubscribe(): boolean {
    return !!(
      this.user && this.user.offers.find(_offer => this.offer.id === _offer.id)
    );
  }
}
