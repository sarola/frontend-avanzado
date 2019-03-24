import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {OffersService} from '../../shared/services/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  currentUser: {username, token};
  userProfile:any;
  userRol : string;
  constructor(private router: Router, private route: ActivatedRoute, private offersService: OffersService) {
    this.userProfile = JSON.parse(localStorage.getItem("userProfile"));
    this.userRol = this.userProfile.roles[0].value;
    this.offersService.getOffers().subscribe(x => {
      localStorage.setItem('ofertas', JSON.stringify(x));

    });

  }

  ngOnInit() {

  }

}
