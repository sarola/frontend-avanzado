import { Component } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(profileService: ProfileService) {
    console.log(profileService.user);
  }

  /*   constructor(
    private profileService: ProfileService,
    private signinService: SigninService
  ) {
    this.signinService
      .login({ email: 'carlos.caballero@gmail.com', password: '1234' })
      .then(user => {
        this.profileService.user = user;
      });
  } */
}
