import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import {JwtInterceptor} from '../../shared/interceptors/jwt.interceptor';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,

  ],
 
})
export class DashboardModule { }
