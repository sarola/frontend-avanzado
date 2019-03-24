import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {AppSettings} from '../../../shared/app.settings';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProfileService} from '../../../shared/services/profile.service';
import {documentoValidator} from '../../../shared/directives/documento-validator.directive';

@Component({
  selector: 'app-profile-study-modify',
  templateUrl: './profile-study-modify.component.html',
  styleUrls: ['./profile-study-modify.component.scss']
})
export class ProfileStudyModifyComponent implements OnInit {

  profileStudentForm: FormGroup;
  userProfile: any;
  municipios = [];
  municipiosTotal = [];
  provincias = [

  ];
  tipos_documento=[

  ];

  constructor(private formBuilder: FormBuilder, private route: Router, private profileService: ProfileService) {
    this.userProfile = JSON.parse(localStorage.getItem(('userProfile')));

    this.profileStudentForm =
        this.formBuilder.group(
            {
          datosPersonales : this.formBuilder.group(
              {
                nombre: [this.userProfile.name,
                    [Validators.minLength(3), Validators.maxLength(55),
                        Validators.pattern('(^[a-zA-ZñÑ]+(\\s[a-zA-ZñÑ]+){0,30})$'), Validators.required]],
                apellidos: [this.userProfile.surname,
                    [Validators.minLength(3), Validators.maxLength(55),
                        Validators.pattern('(^[a-zA-ZñÑ]+(\\s[a-zA-ZñÑ]+){0,30})$'), Validators.required]],
                avatar: [this.userProfile.avatar_name],
                fecha_nacimiento: [this.userProfile.fecha_nacimiento, [Validators.required, Validators.pattern('\\d\\d/\\d\\d/\\d\\d\\d\\d')]],
                telefono: [this.userProfile.telefono, [Validators.required, Validators.pattern('\\d*')]],
                telefono2: [this.userProfile.telefono2, Validators.pattern('\\d*')],
                tipo_documento: [this.userProfile.tipo_documento, [Validators.required]],
                num_documento: [this.userProfile.num_documento, [Validators.required]],
              }),
          direccion: this.formBuilder.group(
              {
                direccion:  [this.userProfile.direccion,
                    [Validators.required]],
                provincia: [this.userProfile.provincia],
                municipio: [this.userProfile.municipio,
                    [Validators.required]]
              },

  ),
            mas_datos: this.formBuilder.group(
                {
                    sobre_mi: [this.userProfile.about_me],
                    otras_competencias: [this.userProfile.other_competency],
                    permisos_conducir: [this.userProfile.permisos_conducir]

                }
            )
        });

      const controlTipoDocumento = this.profileStudentForm['controls'].datosPersonales['controls'].tipo_documento;
      if (this.userProfile.tipo_documento === 'NIF/NIE' || this.userProfile.tipo_documento === 'Pasaporte'){
          this.profileStudentForm['controls'].datosPersonales['controls'].num_documento
              .setValidators([documentoValidator(this.userProfile.tipo_documento), Validators.required]);
      }
      else {
          controlTipoDocumento.setValidators([Validators.required]);
      }

      controlTipoDocumento.updateValueAndValidity();
    }

    formControlValueChanged() {

        const controlTipoDocumento = this.profileStudentForm['controls'].datosPersonales['controls'].tipo_documento;
        const controlDocumento = this.profileStudentForm['controls'].datosPersonales['controls'].num_documento;

        controlDocumento.clearValidators();
        if (controlTipoDocumento.value === 'NIF/NIE' || controlTipoDocumento.value === 'Pasaporte') {
            controlDocumento.setValidators([documentoValidator(controlTipoDocumento.value), Validators.required]);

        }
        else{
            controlDocumento.setValidators([Validators.required]);
        }
        controlDocumento.updateValueAndValidity();


    }
    provinciaChange(provincia) {
      this.municipios = this.municipiosTotal.filter(x => x.provincia === provincia).map(x => x.nombre);
    }

  ngOnInit() {
      this.profileService.getProvincias().subscribe(x => this.provincias = x);
      this.profileService.getMunicipios().subscribe(x => {
          this.municipiosTotal = x;
          this.municipios = x.filter(m => m.provincia === this.userProfile.provincia).map(mu => mu.nombre);
      });

      this.profileService.getTiposDocumento().subscribe(x => this.tipos_documento = x);
  }

  onSubmit() {

      this.userProfile.name = this.profileStudentForm['controls'].datosPersonales['controls'].nombre.value;
      this.userProfile.surname = this.profileStudentForm['controls'].datosPersonales['controls'].apellidos.value;
      this.userProfile.fecha_nacimiento = this.profileStudentForm['controls'].datosPersonales['controls'].fecha_nacimiento.value;
      this.userProfile.telefono = this.profileStudentForm['controls'].datosPersonales['controls'].telefono.value;
      this.userProfile.telefono2 = this.profileStudentForm['controls'].datosPersonales['controls'].telefono2.value;
      this.userProfile.tipo_documento = this.profileStudentForm['controls'].datosPersonales['controls'].tipo_documento.value;
      this.userProfile.num_documento = this.profileStudentForm['controls'].datosPersonales['controls'].num_documento.value;
      this.userProfile.direccion = this.profileStudentForm['controls'].direccion['controls'].direccion.value;
      this.userProfile.provincia = this.profileStudentForm['controls'].direccion['controls'].provincia.value;
      this.userProfile.municipio = this.profileStudentForm['controls'].direccion['controls'].municipio.value;
      this.userProfile.about_me = this.profileStudentForm['controls'].mas_datos['controls'].sobre_mi.value;
      this.userProfile.other_competency = this.profileStudentForm['controls'].mas_datos['controls'].otras_competencias.value;
      this.userProfile.about_me = this.profileStudentForm['controls'].mas_datos['controls'].sobre_mi.value;
      this.userProfile.permisos_conducir = this.profileStudentForm['controls'].mas_datos['controls'].permisos_conducir.value;


     // this.userProfile =

      localStorage.setItem('userProfile', JSON.stringify(this.userProfile));


      this.profileService.updateProfile(this.userProfile).subscribe(x => {
      this.route.navigate(['admin/profile']);
      });

  }
}
