import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../../../shared/services/profile.service';
import {select, Store} from '@ngrx/store';
import {State} from '../../../shared/state/root.reducer';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.scss']
})
export class ProfileCompanyComponent implements OnInit {
  @Input() user: User;


  constructor(private router: Router, private route: ActivatedRoute, private store: Store<State>) {
  //console.log('name company: ' + this.user.name);
    //this.userProfile = this.profileService.user;
   // this.store.pipe(select(state => state.userState.user)).subscribe(user => this.userProfile = user);

  }

  ngOnInit() {

  }


}
