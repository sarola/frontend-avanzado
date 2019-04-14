import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../shared/services/profile.service';
import { MockData } from 'src/app/shared/mock-data';
import {Store, select} from '@ngrx/store';
import {
  Language,
  LanguageLevel,
  LanguageName
} from 'src/app/shared/models/language.model';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import {State} from '../../../../reducers';
import {CollegeStudy, VocationalStudy} from '../../../../shared/models/study.model';
import {LanguageActions} from '../../../../shared/state/profile/actions';

@Component({
  selector: 'app-profile-language',
  templateUrl: './profile-language.component.html',
  styleUrls: ['./profile-language.component.scss']
})
export class ProfileLanguageComponent implements OnInit {
  rForm: FormGroup;
  language: Language = {} as Language;
  languageLevels: LanguageLevel[];
  languageNames: LanguageName[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
    private store: Store<State>
  ) {
    this.route.params.subscribe(params => {
      const uid = +params.uid;
      this.store.pipe(select(state => state.userState.user)).subscribe(user => {
        this.language = (user.languages.find(language => language.uid === uid) || {}) as
            Language;
      });
      // const user = this.profileService.user;
      // const uid = +params.uid;
      // this.language = (user.languages.find(language => language.uid === uid) ||
      //   {}) as Language;
    });
  }
  ngOnInit() {
    this.loadSelectProperties();
    this.loadFormInstance();
  }
  public loadSelectProperties(): void {
    this.languageLevels = MockData.LANGUAGES_LEVEL;
    this.languageNames = MockData.LANGUAGES_NAME;
  }

  public loadFormInstance(): void {
    this.rForm = new FormGroup({
      level: new FormControl(this.language.level, [Validators.required]),
      name: new FormControl(this.language.name, [Validators.required]),
      date: new FormControl(this.language.date, [
        Validators.required,
        dateValidator()
      ])
    });
  }
  public submit() {
    this.saveOrUpdate({ ...this.language, ...this.rForm.value });
  }

  compareLevel(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  compareName(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private update(language: Language) {
    const user = this.store.select(state => state.userState.user);
    let userUpdate = null;
    user.subscribe(useraux => {
          useraux.languages[useraux.languages.findIndex(_language => _language.uid === language.uid)] = language;
          userUpdate = useraux;
        }
    );
    this.store.dispatch(new LanguageActions.UpdateLanguage(userUpdate));


    this.router.navigate(['/admin/profile']);
  }
  private save(language: Language) {
    let user = null;
    this.store.pipe(select(state => state.userState.user)).subscribe(_user => user = _user);
    const _language = MockData.fakeIncreaseID<Language>(
        user.languages,
        language
    );
    user.languages = [...user.languages, _language];

    this.store.dispatch(new LanguageActions.SaveLanguage(user));

    this.router.navigate(['/admin/profile']);
  }

  saveOrUpdate(language: Language) {
    this.isNew() ? this.save(language) : this.update(language);
  }
  public isNew(): boolean {
    return !!!this.language.uid;
  }
}
