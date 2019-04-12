import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { OffersService } from '../../services/offers.service';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {State} from '../../../reducers';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.template.html'
})
export class AdminLayoutComponent {
  /*   constructor() {} */
  user$: Observable<User>;

  /* MOCK PURPOSES */
  constructor(
    // private profileService: ProfileService,
    // private offersService: OffersService,
    private router: Router,
    private http: HttpClient,
    private store: Store<State>
  ) {
    // this.login({ email: 'carlos.caballero@gmail.com', password: '1234' }).then(
    //   user => {
    //     this.profileService.user = user;
    //   }
    // );
    this.user$ = store.pipe(select(state => state.authState.user));
    this.user$.subscribe(x =>{
      if (!x || !x.name){
        this.router.navigate(['signin']);
      }
      // else{
      //   console.log('name: ' + x.name);
      // }
    });

    // this.offersService.getOffers().subscribe(offers => {
    //   this.offersService.offers = offers;
    // });
  }

  getUsers() {
    return this.http.get<any>(AppSettings.API_ENDPOINT_USERS).toPromise();
  }

  // async login({ email, password }): Promise<any> {
  //   const users = await this.getUsers();
  //   // Mock response from backend:
  //   return users.find(
  //     (user: any) => user.email === email && user.password === password
  //   );
  // }
}
