import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../../../shared/services/profile.service';
import {OffersService} from '../../../shared/services/offers.service';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {

  currentUser: {username, token};
  userProfile: any;
  userRol: string;
  oferta: any;
  titulos: any;
  inscrito = false;
  ofertasTotal: any[];
  constructor(private router: Router, private route: ActivatedRoute, private profileService: ProfileService,
              private offersService: OffersService, private location: Location) {

  }

  ngOnInit() {
    this.userProfile = JSON.parse(localStorage.getItem("userProfile"));
    this.oferta = JSON.parse(localStorage.getItem('oferta'));
    this.ofertasTotal = JSON.parse(localStorage.getItem('ofertas'));

    this.profileService.getCiclos().subscribe(x => {this.titulos = x.filter(ciclo => ciclo.familia === this.oferta.familia_profesional).map(ci => ci.ciclos); });

    if(this.oferta.suscriptores.map(x => x.id).includes(this.userProfile.id))
      this.inscrito = true;
    else
      this.inscrito = false;
  }
  inscribir(){

    const suscriptor = {id: this.userProfile.id, nombre: this.userProfile.name, estudios: this.userProfile.studies.map(x => x.titulo), estado: 'suscrito'};
    this.oferta.suscriptores.push(suscriptor);
    localStorage.setItem('oferta', JSON.stringify(this.oferta));

    this.ofertasTotal[this.ofertasTotal.indexOf(this.oferta.id)] = this.oferta;
    localStorage.setItem('ofertas', JSON.stringify(this.ofertasTotal));

   this.offersService.actualizarOferta(this.oferta).subscribe(() => this.location.back());
   // this.router.navigate(['admin/offers']);

  }
  borrar(){
    const index = this.oferta.suscriptores.indexOf(this.userProfile.id);
    this.oferta.suscriptores.splice(index, 1);
    localStorage.setItem('oferta', JSON.stringify(this.oferta));

    this.ofertasTotal[this.ofertasTotal.indexOf(this.oferta.id)] = this.oferta;
    localStorage.setItem('ofertas', JSON.stringify(this.ofertasTotal));

    this.offersService.actualizarOferta(this.oferta).subscribe(() => {this.router.navigate(['admin/offers']); });
  }
}
