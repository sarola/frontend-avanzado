import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {OffersService} from '../../../shared/services/offers.service';

@Component({
  selector: 'app-offers-company',
  templateUrl: './offers-company.component.html',
  styleUrls: ['./offers-company.component.scss']
})
export class OffersCompanyComponent implements OnInit {
  userProfile: any;
  ofertas: any[];
  //ofertasTotal: any[];
  constructor(private router: Router, private route: ActivatedRoute, private offersService: OffersService) {



  }

  ngOnInit() {
    this.userProfile = JSON.parse(localStorage.getItem("userProfile"));

    this.offersService.getOffersCompany(this.userProfile.nombre_comercial).subscribe(off => this.ofertas = off);
    //this.ofertasTotal = JSON.parse(localStorage.getItem('ofertas'));

  }

  eliminar(oferta: any) {
   // this.ofertasTotal.splice(this.ofertasTotal.indexOf(oferta.id), 1);
    this.ofertas.splice(this.ofertas.indexOf(oferta.id), 1);

    this.offersService.borrarOferta(oferta);
    //localStorage.setItem('ofertas', JSON.stringify(this.ofertasTotal));
  }

}
