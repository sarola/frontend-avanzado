import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user.model';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import * as fromProfile from '../../shared/state/profile/reducers';
import {Study} from '../../shared/models/study.model';
import {ProfileActions} from '../../shared/state/profile/actions';
import {State} from '../../reducers';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$: Observable<User>;
  userId: number;
  constructor(private store: Store<State>, private route: ActivatedRoute) {
    this.userId = -1;
    this.store.pipe(select((state) => state.authState.user.id)).subscribe(id => this.userId = id);

    this.user$ = this.store.pipe(select(state => state.userState.user));
    this.store.dispatch(new ProfileActions.GetUser(this.userId));

  }


  ngOnInit() {
    console.log('init0');
  }


}
