import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
/* import { UserOptions } from '../models/user'; */
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { of, Observable, throwError, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
/* import { AppStore } from '../states/store.inteface';
import { Store } from '@ngrx/store';
import * as UserActions from 'app/shared/states/user/actions';
import { User } from 'app/shared/models/user'; */
import {InMemoryDataService} from '../inmemory-db/inmemory-db.service';
import {ProfileService} from './profile.service';

import { Oferta } from '../models/oferta';


@Injectable()
export class OffersService {

    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    constructor( private http: HttpClient, private profileService: ProfileService) {
    }
    getOffers() {
        return this.http.get<any[]> (AppSettings.API_ENDPOINT_OFFERS).pipe(map(items => {

            return items;
        }));
    }
    getOffersStudent(id: number) {

        let estudiantes = [];
        this.profileService.getUsers().subscribe(x => estudiantes = x);

        const estudiante = estudiantes.filter(x => x.id === id)[0];
        const familias_profesionales = estudiante.studies.map(x => x.familia_profesional);
        let ofertasFiltro = [];

        return this.getOffers().pipe(map(off => {
            ofertasFiltro = off.filter(x => familias_profesionales.includes(x.familia_profesional));
            return ofertasFiltro;
        }));

    }

    getOffersCompany(empresa: string) {
        let ofertasFiltro = [];

        return this.getOffers().pipe(map(off => {
            ofertasFiltro = off.filter(x => x.empresa === empresa);
            return ofertasFiltro;
        }));

    }
    actualizarOferta(oferta: any){
        const url = AppSettings.API_ENDPOINT_OFFERS + '/' + oferta.id;
        return this.http
                .put(url, oferta, {headers: this.headers});


    }
    nuevaOferta(oferta: any){
        const url = AppSettings.API_ENDPOINT_OFFERS;
        return this.http
            .post(url, oferta, {headers: this.headers});

    }

    borrarOferta(oferta: any) {
        const url = AppSettings.API_ENDPOINT_OFFERS + '/' + oferta.id;
        return this.http.delete(url, {headers: this.headers});

    }

}
