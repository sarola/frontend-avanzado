import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user.model';
import {ProfileService} from '../../shared/services/profile.service';
import {select, Store} from '@ngrx/store';
import * as fromProfile from './reducers/profile.reducer';
//import * as fromAuth from '../auth/reducers/login-page.reducer';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {GetUser} from '../auth/actions/login-page.actions';
//import {State, getUserId} from '../../reducers';
import * as fromAuth from '../../reducers';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userRol: string;
  user$: Observable<User>;
  userId$: Observable<number>;


  constructor(private store: Store<fromAuth.State>, private route: ActivatedRoute) {
   // console.log('userr: ' + this.store.dispatch()
   // this.store.pipe(select(state => state.user), map(x => console.log('user: ' + x)));
    //store.select(state => state.user).subscribe(x => console.log('subscfibre: ' + x));

  }
  // constructor(private profileService: ProfileService) {
  //   console.log(this.profileService.user);
  //   if(this.profileService.user)
  //     if(this.profileService.user.roles)
  //       this.userRol = this.profileService.user.roles[0];
  //   console.log(this.userRol);
  //   console.log(this.profileService.user.name);
  // }

  ngOnInit() {
    //this.user$ = this.store.pipe(select(getUser));
    this.user$ = this.store.pipe(select((state) => state.userState.user));

    this.userId$ = this.store.select((state) => state.userState.user.id);
    //this.store.dispatch(new GetUser(1));
  }
}
