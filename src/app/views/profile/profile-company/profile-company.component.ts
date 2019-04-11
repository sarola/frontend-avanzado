import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../../../shared/services/profile.service';
import {select, Store} from '@ngrx/store';
import {State} from '../reducers';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.scss']
})
export class ProfileCompanyComponent implements OnInit {

  userProfile: any;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<State>) {

    //this.userProfile = this.profileService.user;
    this.store.pipe(select(state => state.userState.user)).subscribe(user => this.userProfile = user);


  }

  ngOnInit() {

  }


}
