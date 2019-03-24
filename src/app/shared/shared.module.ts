import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ProfileStudentComponent} from '../views/profile/profile-student/profile-student.component';
import {ProfileCompanyComponent} from '../views/profile/profile-company/profile-company.component';
import {AlertService} from './services/alert/alert.service';

//import {NotificationsService} from './services/notifications.service';
/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */

// COMPONENTS

// DIRECTIVES

// PIPES

// SERVICES
import { AppConfirmService } from './services/app-confirm/app-confirm.service';
import { AppComfirmComponent } from './services/app-confirm/app-confirm.component';
import {MenuComponent} from '../views/menu/menu.component';

const classesToInclude = [AppComfirmComponent, ProfileStudentComponent, ProfileCompanyComponent, MenuComponent];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],

  providers: [AppConfirmService, AlertService],
  entryComponents: [AppComfirmComponent, ProfileStudentComponent, ProfileCompanyComponent, MenuComponent],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedModule {}
