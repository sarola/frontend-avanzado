import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { ProfileStudyComponent } from './profile-student/study/profile-study.component';
import { VocationalFormComponent } from './profile-student/study/vocational-form/vocational-form.component';
import { UniversityDegreeComponent } from './profile-student/study/university-degree-form/university-degree-form.component';
import { ProfileLanguageComponent } from './profile-student/language/profile-language.component';
import { ProfileAccountComponent } from './profile-student/account/profile-account.component';
import {ProfileCompanyComponent} from './profile-company/profile-company.component';
import {ProfileCompanyModifyComponent} from './profile-company/account/profile-company-modify.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileStudentComponent,
    ProfileStudyComponent,
    ProfileCompanyComponent,
    VocationalFormComponent,
    UniversityDegreeComponent,
    ProfileLanguageComponent,
    ProfileAccountComponent,
      ProfileCompanyModifyComponent
  ],
  imports: [SharedModule, ProfileRoutingModule,
    StoreModule.forFeature('profile', reducers)]
})
export class ProfileModule {}
