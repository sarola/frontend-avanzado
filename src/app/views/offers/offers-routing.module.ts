import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OffersComponent} from './offers.component';
import {OffersStudentComponent} from './offers-student/offers-student.component';
import {OffersCompanyComponent} from './offers-company/offers-company.component';
import {OfferDetailComponent} from './offers-student/offer-detail.component';
import {OffersCompanyModifyComponent} from './offers-company/offers-company-modify.component';


const routes: Routes =
    [
      { path: '', component: OffersComponent },
        {path: 'admin/offers/offer-detail/:id', component: OfferDetailComponent},
        {path: 'admin/offers/offers-company-modify', component: OffersCompanyModifyComponent}



    ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
