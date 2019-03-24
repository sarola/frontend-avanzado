import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {OffersService} from '../../../shared/services/offers.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../shared/services/profile.service';

@Component({
  selector: 'app-offers-company-modify',
  templateUrl: './offers-company-modify.component.html',
  styleUrls: ['./offers-company-modify.component.scss']
})
export class OffersCompanyModifyComponent implements OnInit {
  oferta: any;
  nuevaOferta = false;
  idOferta: number;
  userProfile: any;
  suscriptores: any[];
  ofertasTotal: any[];
  offerForm: FormGroup;
  provincias: any[];
  familias_profesionales: any[];
  ciclos_formativos: any[];
  seleccionados: any[];
  descartados: any[];
  constructor(private router: Router, private route: ActivatedRoute, private offersService: OffersService,
              private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.oferta = [];

    this.profileService.getProvincias().subscribe(x => this.provincias = x);
    this.userProfile = JSON.parse(localStorage.getItem("userProfile"));
    this.ofertasTotal = JSON.parse(localStorage.getItem('ofertas'));

    this.profileService.getFamilias().subscribe(x => this.familias_profesionales = x);
    route.params.subscribe(params => {
      const oferta = params['oferta'];
      if (oferta === undefined) {
        this.nuevaOferta = true;
      }
      this.idOferta = oferta;

      if (!this.nuevaOferta) {
        this.oferta = this.ofertasTotal.filter(x => x.id == this.idOferta)[0];

        this.suscriptores = this.oferta.suscriptores.filter(x => x.estado === 'suscrito');
        this.seleccionados = this.oferta.suscriptores.filter(x => x.estado === 'seleccionado');
        this.descartados = this.oferta.suscriptores.filter(x => x.estado === 'descartado');
      }
      else
        this.oferta = {};
    });

  }
  ngOnInit() {
    this.offerForm =
        this.formBuilder.group(
            {
              puesto: [this.oferta.puesto,
                [Validators.minLength(3), Validators.maxLength(255), Validators.required]],

              descripcion: [this.oferta.descripcion, Validators.required],
              provincia: [this.oferta.provincia,  Validators.required],
              municipio: [this.oferta.municipio, Validators.required],
              familia_profesional: [this.oferta.familia_profesional, Validators.required]


            });

  }

  onSubmit() {
    this.oferta.empresa = this.userProfile.nombre_comercial;
    this.oferta.puesto = this.offerForm.controls.puesto.value;
    this.oferta.descripcion = this.offerForm.controls.descripcion.value;
    this.oferta.provincia = this.offerForm.controls.provincia.value;
    this.oferta.municipio = this.offerForm.controls.municipio.value;
    this.oferta.familia_profesional = this.offerForm.controls.familia_profesional.value;
    this.oferta.suscriptores = [];
    const date = new Date();
    let dia = (date.getDate()).toString();
    let mes = (date.getMonth() + 1).toString();
    if (parseInt(dia, 10) < 10) {
      dia = '0' + dia;
    }
    if (parseInt(mes, 10) < 10) {
      mes = '0' + mes;
    }
    this.oferta.fecha =  dia + '/' + mes + '/' +  date.getFullYear();

    if (this.nuevaOferta) {
      this.ofertasTotal.push(this.oferta);

    } else {
      const index = this.ofertasTotal.indexOf(this.oferta.id);
      this.ofertasTotal[index] = this.oferta;
    }
    localStorage.setItem('ofertas', JSON.stringify(this.ofertasTotal));
    if(!this.nuevaOferta) {
      this.offersService.actualizarOferta(this.oferta).subscribe(x => {
        this.router.navigate(['admin/offers']);
      });
    }
    else{
      this.offersService.nuevaOferta(this.oferta).subscribe(x => {
        this.router.navigate(['admin/offers']);
      });
    }
  }

  descartar(suscriptor: any){
    if(this.seleccionados.map(x => x.id).includes(suscriptor.id)) {
      this.seleccionados.splice(this.seleccionados.indexOf(suscriptor.id), 1);
    }
    else {
      this.suscriptores.splice(this.suscriptores.indexOf(suscriptor.id), 1);
    }
    this.descartados.push(suscriptor);
    this.oferta.suscriptores.filter(x => x.id == suscriptor.id)[0].estado = 'descartado';
    this.offersService.actualizarOferta(this.oferta);
  }

  seleccionar(suscriptor: any){
    this.oferta.suscriptores.filter(x => x.id == suscriptor.id)[0].estado = 'seleccionado' ;
    this.offersService.actualizarOferta(this.oferta);
    this.suscriptores.splice(this.suscriptores.indexOf(suscriptor.id), 1);
    this.seleccionados.push(suscriptor);
    if(this.descartados.map(x => x.id).includes(suscriptor.id)) {
      this.descartados.splice(this.descartados.indexOf(suscriptor.id), 1);
    }
  }

}
