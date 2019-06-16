import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Language } from '../../../../shared/models/language.model';
import { Observable } from 'rxjs';
import { AppStore } from '../../../../shared/states/store.interface';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { getLanguageByID, getProfile } from '../../../../shared/states/user';
import * as UserActions from '../../../../shared/states/user/actions';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-profile-language-wrapper',
  template: `
    <app-profile-language fxLayout="column"
      [language]="language$ | async"
      [user]="user$ | async"
      (save)="onSaveLanguage($event)"
      (update)="onUpdateLanguage($event)"
    ></app-profile-language>
  `
})
export class ProfileLanguageWrapperComponent {
  language$: Observable<Language>;
  user$: Observable<User>;

  constructor(private route: ActivatedRoute, private store$: Store<AppStore>) {
    this.user$ = this.store$.select(getProfile);
    this.language$ = this.route.params.pipe(
      map(({ uid: uid }: { uid: string }) => Number.parseInt(uid)),
      switchMap(uid => this.store$.select(getLanguageByID(uid)))
    );
  }

  onSaveLanguage(user: User) {
    this.store$.dispatch(new UserActions.UpdateUser(user));
  }
  onUpdateLanguage(user: User) {
    this.store$.dispatch(new UserActions.UpdateUser(user));
  }
}
