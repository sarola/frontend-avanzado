import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import {ProfileStudyModifyComponent} from './profile-student/profile-study-modify.component';
import {ProfileCompanyModifyComponent} from './profile-company/profile-company-modify.component';

const routes: Routes = 
[
    { path: '', component: ProfileComponent, pathMatch: 'full' },
    { path: 'profile-student/:id', component: ProfileStudyModifyComponent},
    { path: 'profile-company/:id', component: ProfileCompanyModifyComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
