import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import {OffersCompanyComponent} from './offers-company/offers-company.component';
import {OffersStudentComponent} from './offers-student/offers-student.component';
import {OffersService} from '../../shared/services/offers.service';
import {OfferDetailComponent} from './offers-student/offer-detail.component';
import {OffersCompanyModifyComponent} from './offers-company/offers-company-modify.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
@NgModule({
  declarations: [OffersComponent, OffersCompanyComponent, OffersStudentComponent, OfferDetailComponent, OffersCompanyModifyComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    FormsModule,
      SharedModule,
    ReactiveFormsModule

  ],

  providers:[OffersService]
})
export class OffersModule { }
