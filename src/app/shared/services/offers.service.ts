import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import {of, Observable, throwError} from 'rxjs';
import { Offer } from '../models/offer.model';
import {User} from '../models/user.model';
import {map} from 'rxjs/operators';

@Injectable()
export class OffersService {
  private _offers: Offer[] = [{}] as Offer[];

  constructor(
    private http: HttpClient /* , private store$: Store<AppStore> */
  ) {}

  set offers(_offers) {
    this._offers = _offers;
  }
  get offers() {
    return this._offers;
  }

  getOffers() {
    console.log("getOffers");
    return this.http.get<any>(AppSettings.API_ENDPOINT_OFFERS).pipe(map(items => {

      return items;
    }));
  }
  getOffer(id: number) {
    return this.http.get<Offer[]>(AppSettings.API_ENDPOINT_OFFERS).pipe(map(items => {
      const filtered = items.filter(x => x.id === id);

      if (filtered.length > 0)
        return filtered[0];
      else{
        throwError('Error getUser');
      }
    }));
  }
}
