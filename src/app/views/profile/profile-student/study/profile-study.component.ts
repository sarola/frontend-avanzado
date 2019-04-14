import {Component, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../shared/services/profile.service';
import {Store, select} from '@ngrx/store';
import {
  Study,
  VocationalStudy,
  CollegeStudy
} from 'src/app/shared/models/study.model';
import { MockData } from 'src/app/shared/mock-data';
import {createNewUser, User} from '../../../../shared/models/user.model';
import {State} from '../../../../reducers';
import {LoginPageActions} from '../../../../shared/state/auth/actions';
import {StudyActions} from '../../../../shared/state/profile/actions';

@Component({
  selector: 'app-profile-study',
  templateUrl: './profile-study.component.html',
  styleUrls: ['./profile-study.component.scss']
})
export class ProfileStudyComponent {
  studiesForm: FormGroup;
  options = MockData.TYPE_STUDIES;
  study: Study = {} as (VocationalStudy | CollegeStudy);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
    private store: Store<State>
  ) {

    //this.store.pipe(select(state => state.userState.user)).subscribe(x => console.log('user study: ' + x));
    this.route.params.subscribe(params => {
      const uid = +params.uid;
      this.store.pipe(select(state => state.userState.user)).subscribe(user => {
      this.study = (user.studies.find(study => study.uid === uid) || {}) as
        | VocationalStudy
        | CollegeStudy;
    });
    }
    );
    this.studiesForm = new FormGroup({
      option: new FormControl(this.study.level, [Validators.required])
    });
  }

  compareOption(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private update(study: VocationalStudy | CollegeStudy) {
    const user = this.store.select(state => state.userState.user);
    let userUpdate = null;
    user.subscribe(useraux => {
         useraux.studies[useraux.studies.findIndex(_study => _study.uid === study.uid)] = study;
        userUpdate = useraux;
        }
    );
    this.store.dispatch(new StudyActions.UpdateStudy(userUpdate));

    //this.profileService.updateProfile(user);
    this.router.navigate(['/admin/profile']);
  }
  private save(study: VocationalStudy | CollegeStudy) {
    let user = null;
    this.store.pipe(select(state => state.userState.user)).subscribe(_user => user = _user);
    const _study = MockData.fakeIncreaseID<VocationalStudy | CollegeStudy>(
        user.studies,
        study
      );
      user.studies = [...user.studies, _study];

      this.store.dispatch(new StudyActions.SaveStudy(user));
  }

  saveOrUpdate(study: VocationalStudy | CollegeStudy) {

    study.level = this.studiesForm.get('option').value;
    this.isNew() ? this.save(study) : this.update(study);
  }
  public isNew(): boolean {
    return !!!this.study.uid;
  }
  public isSelectVocational(): boolean {
    const value = this.studiesForm.get('option').value;
    return value && value.uid === MockData.TYPE_STUDIES[0].uid;
  }
  public isSelectUniversity(): boolean {
    const value = this.studiesForm.get('option').value;
    return value && value.uid === MockData.TYPE_STUDIES[1].uid;
  }
  public backProfile() {
    this.router.navigate(['/admin/profile']);
  }
}
