import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../../shared/services/profile.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

    configForm: FormGroup;
    userProfile: any;
    idiomas = [

    ];
    provincias = [];

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
                private profileService: ProfileService) {
        this.profileService.getIdiomas().subscribe(x => this.idiomas = x);
        this.profileService.getProvincias().subscribe(x => {this.provincias = x;this.addCheckboxes();});

        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));

        this.configForm =
            this.formBuilder.group(
                {
                    idioma: [this.userProfile.idioma,
                        [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
                    provincias: this.formBuilder.array([])

                });

    }

    private addCheckboxes() {
        this.provincias.map(x => {
            const control = new FormControl();
            if (this.userProfile.provincias_notificaciones.includes(x)) {
                control.setValue(true);


            } else {
                control.setValue(false);
            }
            control['text'] = x;
            (this.configForm.controls.provincias as FormArray).push(control);
        });
    }

    private checkAll(event: Event) {
        const chkArray = <FormArray>this.configForm.controls.provincias;

        if (event.target['checked'] === true){
            for(const chk of chkArray.controls){
               chk.setValue(true);
            }

        } else {
            for (const chk of chkArray.controls){
                chk.setValue(false);
            }
        }

    }
    ngOnInit() {

    }





    onSubmit() {

        this.userProfile.idioma = this.configForm.controls.idioma.value;
        const provinciasControl = (this.configForm.controls.provincias as FormArray).controls;

        for(const prov of provinciasControl){
            if(prov['value'] === true && !this.userProfile.provincias_notificaciones.includes(prov['text'])) {
                this.userProfile.provincias_notificaciones.push(prov['text']);
            } else if (prov['value'] === false && this.userProfile.provincias_notificaciones.includes(prov['text'])){
                this.userProfile.provincias_notificaciones.splice(this.userProfile.provincias_notificaciones.indexOf(prov['text']),1);
            }
        }
        localStorage.setItem('userProfile', JSON.stringify(this.userProfile));
        this.profileService.updateProfile(this.userProfile).subscribe(x => {
            this.router.navigate(['admin/dashboard']);
        });
    }

}
