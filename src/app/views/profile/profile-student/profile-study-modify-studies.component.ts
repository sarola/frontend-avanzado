import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {AppSettings} from '../../../shared/app.settings';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProfileService} from '../../../shared/services/profile.service';
import {first} from 'rxjs/operators';
import {RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile-study-modify-studies',
  templateUrl: './profile-study-modify-studies.component.html',
  styleUrls: ['./profile-study-modify-studies.component.scss']
})
export class ProfileStudyModifyStudiesComponent implements OnInit {

  studiesForm: FormGroup;
  userProfile: any;
  estudioActual: any;
  nuevoEstudio = false;
  idEstudio: number;
  centros = [

  ];
  tipos_titulo = [

  ];
    familias_profesionales = [];
    grados = [];

    ciclos_formativos = [];


    ciclos = [];
    cargaCiclos(familia: string, grado: string) {
        this.ciclos = [];

        const ciclosFilter = this.ciclos_formativos.filter(x => {
            return x.familia === familia && x.grado === grado;
        });
        for(const ciclo of ciclosFilter){
            for(const nombreCiclo of ciclo.ciclos ) {
                this.ciclos.push(nombreCiclo);
            }
        }
    }
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private profileService: ProfileService) {
     route.params.subscribe(params => {
         const estudio = params['estudio'];
         if (estudio === undefined) {
             this.nuevoEstudio = true;
         }
         this.idEstudio = estudio;
     });

    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (!this.nuevoEstudio) {

        this.estudioActual = this.userProfile.studies.filter(x => {
            return x.uid == this.idEstudio;
        })[0];
        if (this.estudioActual.tipo_titulo === 'Ciclo formativo')
            this.cargaCiclos(this.estudioActual.familia_profesional, this.estudioActual.grado);

    } else {
        this.estudioActual = {};
    }

      this.studiesForm =
        this.formBuilder.group(
            {
                tipo_titulo: [this.estudioActual.tipo_titulo,
                    Validators.required],

                nombre_centro: [this.estudioActual.centro],
                titulo: [this.estudioActual.titulo],
                fecha_titulo: [this.estudioActual.date, Validators.pattern('\\d\\d/\\d\\d/\\d\\d\\d\\d')],
                bilingue: [this.estudioActual.bilingue],
                certificado: [this.estudioActual.certificate],
                centro_educativo: [this.estudioActual.centro],
                familia_profesional: [this.estudioActual.familia_profesional],
                grado: [this.estudioActual.grado],
                ciclo: [this.estudioActual.titulo],
                dual: [this.estudioActual.dual]

            });

  }

    ngOnInit() {
        this.formControlValueChanged();

        this.profileService.getFamilias().subscribe(x => this.familias_profesionales = x);
        this.profileService.getGrados().subscribe(x => this.grados = x);
        this.profileService.getTiposTitulo().subscribe(x => this.tipos_titulo = x);
        this.profileService.getCentrosEducativos().subscribe(x => this.centros = x);

        this.profileService.getCiclos().subscribe(x =>{ this.ciclos_formativos = x;
            this.cargaCiclos(this.estudioActual.familia_profesional, this.estudioActual.grado);

        });

    }

    public findInvalidControls() {
        const invalid = [];
        const controls = this.studiesForm.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }
        return invalid;
    }

    formControlValueChanged() {

        //ciclo formativo
       const controlCiclo = this.studiesForm.controls.ciclo;
        const controlFamilia = this.studiesForm.controls.familia_profesional;
        const controlGrado = this.studiesForm.controls.grado;
        const controlCentroEducativo = this.studiesForm.controls.ciclo;


        //titulo universitario / otros
        const controlNombreCentro = this.studiesForm.controls.nombre_centro;
        const controlTitulo = this.studiesForm.controls.titulo;


        this.studiesForm.controls.tipo_titulo.valueChanges.subscribe(

            (tipo: string) => {

                if (tipo === 'Ciclo formativo') {

                    controlCiclo.setValidators([Validators.required]);
                    controlFamilia.setValidators([Validators.required]);
                    controlGrado.setValidators([Validators.required]);
                    controlCentroEducativo.setValidators([Validators.required]);

                    controlNombreCentro.clearValidators();
                    controlTitulo.clearValidators();

                }

                else {
                    controlNombreCentro.setValidators([Validators.required]);
                    controlTitulo.setValidators([Validators.required]);

                    controlCiclo.clearValidators();
                    controlFamilia.clearValidators();
                    controlGrado.clearValidators();
                    controlCentroEducativo.clearValidators();

                }

                controlCiclo.updateValueAndValidity();
                controlFamilia.updateValueAndValidity();
                controlGrado.updateValueAndValidity();
                controlCentroEducativo.updateValueAndValidity();
                controlNombreCentro.updateValueAndValidity();
                controlTitulo.updateValueAndValidity();

            });

    }



  onSubmit() {
      this.estudioActual.centro = (this.studiesForm.controls.tipo_titulo.value === 'Ciclo formativo' ? this.studiesForm.controls.centro_educativo.value :  this.studiesForm.controls.nombre_centro.value);
      this.estudioActual.tipo_titulo = this.studiesForm.controls.tipo_titulo.value;
      this.estudioActual.date = this.studiesForm.controls.fecha_titulo.value;
      this.estudioActual.bilingue = this.studiesForm.controls.bilingue.value;
      this.estudioActual.certificate = this.studiesForm.controls.certificado.value;
      if(this.studiesForm.controls.tipo_titulo.value === 'Ciclo formativo') {
          this.estudioActual.familia_profesional = this.studiesForm.controls.familia_profesional.value;
          this.estudioActual.grado = this.studiesForm.controls.grado.value;
          this.estudioActual.titulo = this.studiesForm.controls.ciclo.value;
          this.estudioActual.dual = this.studiesForm.controls.dual.value;
      }
      else{
          this.estudioActual.titulo = this.studiesForm.controls.titulo.value;
      }

   if (this.nuevoEstudio) {
       this.estudioActual.uid = this.userProfile.studies.length;
        this.userProfile.studies.push(this.estudioActual);
   } else {

       this.userProfile.studies[this.estudioActual.uid] = this.estudioActual;
   }
   localStorage.removeItem('userProfile');
   localStorage.setItem('userProfile', JSON.stringify(this.userProfile));
      this.profileService.updateProfile(this.userProfile).subscribe(x => {
          this.router.navigate(['admin/profile']);
      });
    }
}
