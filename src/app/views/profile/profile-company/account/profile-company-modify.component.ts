import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProfileService} from '../../../../shared/services/profile.service';
import {Municipe, Province} from '../../../../shared/models/user.model';
import {MockData} from '../../../../shared/mock-data';
import {documentNumberValidator} from '../../../../shared/directives/document-number-validator.directive';
import {State} from '../../../../reducers';
import {Store, select} from '@ngrx/store';
import {ProfileActions} from '../../../../shared/state/profile/actions';
@Component({
  selector: 'app-profile-company-modify',
  templateUrl: './profile-company-modify.component.html',
  styleUrls: ['./profile-company-modify.component.scss']
})
export class ProfileCompanyModifyComponent implements OnInit {

  profileCompanyForm: FormGroup;
  userProfile: any;
    municipes: Municipe[];
    provincias: Province[];



    constructor(private formBuilder: FormBuilder, private router: Router, private profileService: ProfileService, private store: Store<State>) {
        this.store.pipe(select (state => state.userState.user)).subscribe(user => this.userProfile = user);
        this.provincias = MockData.PROVINCES;
        this.municipes = MockData.MUNICIPES;

        this.profileCompanyForm = new FormGroup(
            {
                    name:  new FormControl(this.userProfile.name,
                      [Validators.minLength(3), Validators.maxLength(255), Validators.required]),
                    surname:  new FormControl(this.userProfile.surname,
                      [Validators.minLength(3), Validators.maxLength(255), Validators.required]),
                    documentNumber:  new FormControl(this.userProfile.documentNumber),

                          street:   new FormControl(this.userProfile.address.street,
                            [Validators.required]),
                          province:  new FormControl(this.userProfile.address.province),
                          municipe:  new FormControl(this.userProfile.address.municipe,
                            [Validators.minLength(3), Validators.maxLength(55), Validators.required]),
                    username:  new FormControl(this.userProfile.username, [Validators.required]),
                      aboutMe:  new FormControl(this.userProfile.aboutMe, Validators.required),
                otherCompetences:  new FormControl(this.userProfile.otherCompetences, Validators.required),
                      email:  new FormControl(this.userProfile.email, Validators.required),
                      phone:  new FormControl(this.userProfile.phone, Validators.required)

            });

  }

  ngOnInit() {
  }

  onSubmit() {
      const user = { ...this.userProfile, ...this.profileCompanyForm.value };
        this.store.dispatch(new ProfileActions.UpdateAccount(user));
      this.router.navigate(['/admin/profile']);


  }
    compareByUID(option1, option2) {
        return option1.uid === (option2 && option2.uid);
    }

}
