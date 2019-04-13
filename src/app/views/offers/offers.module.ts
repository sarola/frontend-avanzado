import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { OffersDetailComponent } from './offers-detail/offers-detail.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersProfileComponent } from './offers-profile/offers-profile.component';
import { EffectsModule } from '@ngrx/effects';
import {OffersEffects} from '../../shared/state/offers/effects/offers.effects';

@NgModule({
  declarations: [
    OffersComponent,
    OffersProfileComponent,
    OffersListComponent,
    OffersDetailComponent
  ],
  imports: [CommonModule, OffersRoutingModule,
    EffectsModule.forFeature([OffersEffects]),
  ]

})
export class OffersModule {}
