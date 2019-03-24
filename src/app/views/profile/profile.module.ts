import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../../shared/shared.module';
import {JwtInterceptor} from '../../shared/interceptors/jwt.interceptor';
import { ProfileStudyModifyComponent } from './profile-student/profile-study-modify.component';
import { ProfileStudyModifyStudiesComponent } from './profile-student/profile-study-modify-studies.component';
import { ProfileStudyModifyJobsComponent } from './profile-student/profile-study-modify-jobs.component';
import { ProfileStudyModifyLangComponent } from './profile-student/profile-study-modify-lang.component';

import { ProfileCompanyModifyComponent } from './profile-company/profile-company-modify.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfileComponent, ProfileStudyModifyComponent, ProfileCompanyModifyComponent, ProfileStudyModifyStudiesComponent,
    ProfileStudyModifyJobsComponent, ProfileStudyModifyLangComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
