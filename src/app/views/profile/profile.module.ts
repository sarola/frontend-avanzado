import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../../shared/shared.module';
import {JwtInterceptor} from '../../shared/interceptors/jwt.interceptor';
import { ProfileStudyModifyComponent } from './profile-student/profile-study-modify.component';
import { ProfileCompanyModifyComponent } from './profile-company/profile-company-modify.component';

@NgModule({
  declarations: [ProfileComponent, ProfileStudyModifyComponent, ProfileCompanyModifyComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  exports: [
    ProfileComponent
  ],
  providers:[
  {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ]
})
export class ProfileModule { }
