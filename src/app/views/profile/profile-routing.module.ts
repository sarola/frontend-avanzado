import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import {ProfileStudyModifyComponent} from './profile-student/profile-study-modify.component';
import {ProfileCompanyModifyComponent} from './profile-company/profile-company-modify.component';
import {ProfileStudyModifyStudiesComponent} from './profile-student/profile-study-modify-studies.component';
import {ProfileStudyModifyJobsComponent} from './profile-student/profile-study-modify-jobs.component';
import {ProfileStudyModifyLangComponent} from './profile-student/profile-study-modify-lang.component';


const routes: Routes =
[
    { path: '', component: ProfileComponent },
    { path: 'profile-student/modify', component: ProfileStudyModifyComponent},
    { path: 'profile-company/modify', component: ProfileCompanyModifyComponent},
    { path: 'profile-student/modify-studies', component: ProfileStudyModifyStudiesComponent},
    { path: 'profile-student/modify-jobs', component: ProfileStudyModifyJobsComponent},
    { path: 'profile-student/modify-lang', component: ProfileStudyModifyLangComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
