import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.scss']
})
export class ProfileCompanyComponent implements OnInit {

  userProfile: any;

  constructor(private router: Router, private route: ActivatedRoute) {

    this.userProfile = JSON.parse(localStorage.getItem("userProfile"));


  }

  ngOnInit() {

  }


}
