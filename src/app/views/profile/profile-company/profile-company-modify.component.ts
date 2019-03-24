import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProfileService} from '../../../shared/services/profile.service';

@Component({
  selector: 'app-profile-company-modify',
  templateUrl: './profile-company-modify.component.html',
  styleUrls: ['./profile-company-modify.component.scss']
})
export class ProfileCompanyModifyComponent implements OnInit {

  profileCompanyForm: FormGroup;
  userProfile: any;
  provincias = [
    'A Coruña',
    'Lugo',
    'Ourense',
    'Pontevedra'
  ];

  constructor(private formBuilder: FormBuilder, private route: Router, private profileService: ProfileService) {
    this.userProfile = JSON.parse(localStorage.getItem(('userProfile')));
    this.profileCompanyForm =
        this.formBuilder.group(
            {
                    nombre_comercial: [this.userProfile.nombre_comercial,
                      [Validators.minLength(3), Validators.maxLength(255), Validators.required]],
                    razon_social: [this.userProfile.razon_social,
                      [Validators.minLength(3), Validators.maxLength(255), Validators.required]],
                    cif: [this.userProfile.num_documento],
                    direccion: this.formBuilder.group(
                        {
                          direccion:  [this.userProfile.direccion,
                            [Validators.required]],
                          provincia: [this.userProfile.provincia],
                          municipio: [this.userProfile.municipio,
                            [Validators.minLength(3), Validators.maxLength(55), Validators.required]]
                        },
                    ),
                    url: [this.userProfile.url, [Validators.required]],
                    datos_contacto: this.formBuilder.group({
                      nombre: [this.userProfile.datos_contacto.nombre, Validators.required],
                      apellidos: [this.userProfile.datos_contacto.apellidos, Validators.required],
                      email: [this.userProfile.datos_contacto.email, Validators.required],
                      telefono: [this.userProfile.datos_contacto.telefono, Validators.required]

                    })
            });

  }

  ngOnInit() {
  }

  onSubmit() {

    this.userProfile.nombre_comercial = this.profileCompanyForm['controls'].nombre_comercial.value;
    this.userProfile.razon_social = this.profileCompanyForm['controls'].razon_social.value;
    this.userProfile.num_documento = this.profileCompanyForm['controls'].cif.value;
    this.userProfile.direccion = this.profileCompanyForm['controls'].direccion['controls'].direccion.value;
    this.userProfile.provincia = this.profileCompanyForm['controls'].direccion['controls'].provincia.value;
    this.userProfile.municipio = this.profileCompanyForm['controls'].direccion['controls'].municipio.value;
    this.userProfile.url = this.profileCompanyForm['controls'].url.value;
    this.userProfile.datos_contacto.nombre = this.profileCompanyForm['controls'].datos_contacto['controls'].nombre.value;
    this.userProfile.datos_contacto.apellidos = this.profileCompanyForm['controls'].datos_contacto['controls'].apellidos.value;
    this.userProfile.datos_contacto.email = this.profileCompanyForm['controls'].datos_contacto['controls'].email.value;
    this.userProfile.datos_contacto.telefono = this.profileCompanyForm['controls'].datos_contacto['controls'].telefono.value;

    localStorage.setItem('userProfile', JSON.stringify(this.userProfile));
      this.profileService.updateProfile(this.userProfile).subscribe(x => {
          this.route.navigate(['admin/profile']);
      });
  }

}
