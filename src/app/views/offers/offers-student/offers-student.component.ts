import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../../../shared/services/profile.service';
import {OffersService} from '../../../shared/services/offers.service';

@Component({
  selector: 'app-offers-student',
  templateUrl: './offers-student.component.html',
  styleUrls: ['./offers-student.component.scss']
})
export class OffersStudentComponent implements OnInit {
  userProfile: any;
  ofertas: any[];
  myOffers = false;
  constructor(private router: Router, private route: ActivatedRoute, private offersService: OffersService) {
    route.params.subscribe(params => {
      const pagina = params['page'];
      if(pagina != null){
        this.myOffers = true;
      }
      else{
        this.myOffers = false;
      }

    this.userProfile = JSON.parse(localStorage.getItem("userProfile"));
      if(!this.myOffers) {
        this.offersService.getOffersStudent(this.userProfile.id).subscribe(x => {
              this.ofertas = x;
              localStorage.setItem('ofertas', JSON.stringify(this.ofertas));
            }
        );
      }
      else{
        this.offersService.getOffersStudent(this.userProfile.id).subscribe(x => {
              this.ofertas = x.filter(x => x.suscriptores.map(x => x.id).includes(this.userProfile.id));
              localStorage.setItem('ofertas', JSON.stringify(this.ofertas));
            }
        );
      }

    });



  }

  ngOnInit() {
  }

  setOferta(oferta: any){
    localStorage.setItem('oferta', JSON.stringify(oferta));

    this.router.navigate(['admin/offers/offer-detail/' + oferta.id]);
  }

}
