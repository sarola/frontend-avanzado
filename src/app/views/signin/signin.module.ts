import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import {InMemoryDataService} from '../../shared/inmemory-db/inmemory-db.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {SigninService} from '../../shared/services/signin.service';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
   HttpClientInMemoryWebApiModule.forRoot(
   	InMemoryDataService, {dataEncapsulation:false}),
   HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    })
  ],
  providers: [SigninService],
  bootstrap: [SigninComponent]

})
export class SigninModule { }
 