import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ProfileService } from '../../../shared/services/profile.service';
import { User } from 'src/app/shared/models/user.model';
import {Study} from '../../../shared/models/study.model';
import {State} from '../../../shared/state/root.reducer';
import {Store, select} from '@ngrx/store';
import {selectProfileState} from '../../../shared/state/profile/selectors/profile.selector';
import {LanguageActions, StudyActions} from '../../../shared/state/profile/actions';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent {

  @Input() user: User;

  constructor(private  store: Store<State>) {
   // this.user = this.profileService.user;

  }
  deleteStudy(studyID: number) {
    let userStudy = null;
    this.store.pipe(select(selectProfileState)).subscribe(user => userStudy = user);
    console.log('userStudy: ' + userStudy);
    const studies = userStudy.studies;

    const index = studies.findIndex(study => study.uid === studyID);
      if (index === -1) {
        alert('Error: Study not found');
        return;
      }
      studies.splice(index, 1);
      this.store.dispatch(new StudyActions.DeleteStudy(userStudy));


    //   this.profileService.updateProfile(this.user);
  }
  deleteLanguage(languageID: number) {
    let userLanguage = null;
    this.store.pipe(select(selectProfileState)).subscribe(user => userLanguage = user);
    const languages = userLanguage.languages;

    const index = languages.findIndex(language => language.uid === languageID);
    if (index === -1) {
      alert('Error: Language not found');
      return;
    }
    languages.splice(index, 1);
    this.store.dispatch(new LanguageActions.DeleteLanguage(userLanguage));


    //   this.profileService.updateProfile(this.user);
  }
  // deleteStudy(studyID: number) {
  //   const studies = this.user.studies;
  //   const index = studies.findIndex(study => study.uid === studyID);
  //   if (index === -1) {
  //     alert('Error: Study not found');
  //     return;
  //   }
  //   studies.splice(index, 1);
  //   this.profileService.updateProfile(this.user);
  // }
  // deleteLanguage(languageID: any) {
  //   const languages = this.user.languages;
  //   const index = languages.findIndex(language => language.uid === languageID);
  //   if (index === -1) {
  //     alert('Error: Language not found');
  //     return;
  //   }
  //   languages.splice(index, 1);
  //   this.profileService.updateProfile(this.user);
  // }
}
