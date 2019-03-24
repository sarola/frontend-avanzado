import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {AppSettings} from '../../../shared/app.settings';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProfileService} from '../../../shared/services/profile.service';

@Component({
  selector: 'app-profile-study-modify-jobs',
  templateUrl: './profile-study-modify-jobs.component.html',
  styleUrls: ['./profile-study-modify-jobs.component.scss']
})
export class ProfileStudyModifyJobsComponent implements OnInit {

  jobsForm: FormGroup;
  userProfile: any;
  trabajoActual: any;
  nuevoTrabajo = false;
  idTrabajo: number;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private profileService: ProfileService) {
     route.params.subscribe(params => {
         const trabajo = params['trabajo'];
         if (trabajo === undefined) {
             this.nuevoTrabajo = true;
         }
         this.idTrabajo = trabajo;
     });

    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (!this.nuevoTrabajo) {

        this.trabajoActual = this.userProfile.experiences.filter(x => {
            return x.uid == this.idTrabajo;
        })[0];
    } else {
        this.trabajoActual = {};
    }

      this.jobsForm =
        this.formBuilder.group(
            {
                nombre_empresa: [this.trabajoActual.empresa,
                    [Validators.minLength(3), Validators.maxLength(255),
                        Validators.pattern('^[a-zA-ZñÑ]+([a-zA-ZñÑ]+)*$'), Validators.required]],

                fecha_inicio: [this.trabajoActual.fecha_i, [Validators.required, Validators.pattern('\\d\\d/\\d\\d/\\d\\d\\d\\d')]],
                fecha_fin: [this.trabajoActual.fecha_f, [Validators.pattern('\\d\\d/\\d\\d/\\d\\d\\d\\d'), Validators.required]],
                puesto: [this.trabajoActual.puesto, [Validators.minLength(3), Validators.maxLength(255),
                    Validators.pattern('^[a-zA-ZñÑ]+([a-zA-ZñÑ]+)*$'), Validators.required]],
                tareas: [this.trabajoActual.tareas]


            });

  }
    ngOnInit() {
    }





  onSubmit() {

      this.trabajoActual.empresa = this.jobsForm.controls.nombre_empresa.value;
      this.trabajoActual.fecha_i = this.jobsForm.controls.fecha_inicio.value;
      this.trabajoActual.fecha_f = this.jobsForm.controls.fecha_fin.value;
      this.trabajoActual.puesto = this.jobsForm.controls.puesto.value;
      this.trabajoActual.tareas = this.jobsForm.controls.tareas.value;


      if (this.nuevoTrabajo) {
       this.trabajoActual.uid = this.userProfile.experiences.length;
        this.userProfile.experiences.push(this.trabajoActual);
   } else {

       this.userProfile.experiences[this.trabajoActual.uid] = this.trabajoActual;
   }
   localStorage.removeItem('userProfile');
   localStorage.setItem('userProfile', JSON.stringify(this.userProfile));
      this.profileService.updateProfile(this.userProfile).subscribe(x => {
          this.router.navigate(['admin/profile']);
      });
    }
}
