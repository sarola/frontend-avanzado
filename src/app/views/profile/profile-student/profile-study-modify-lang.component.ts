import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {AppSettings} from '../../../shared/app.settings';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProfileService} from '../../../shared/services/profile.service';

@Component({
  selector: 'app-profile-study-modify-lang',
  templateUrl: './profile-study-modify-lang.component.html',
  styleUrls: ['./profile-study-modify-lang.component.scss']
})
export class ProfileStudyModifyLangComponent implements OnInit {

  langForm: FormGroup;
  userProfile: any;
  idiomaActual: any;
  nuevoIdioma = false;
  idIdioma: number;
  seleccionadoOtro = false;
  niveles = [

  ];
  idiomas = [

      ];


  compruebaIdioma(event: Event){
      const selectedOptions = event.target['options'];
      const selectedIndex = selectedOptions.selectedIndex;
      const selectElementText = selectedOptions[selectedIndex].text;
      if (selectElementText === 'Otro') {
          this.seleccionadoOtro = true;
      }
      else {
          this.seleccionadoOtro = false;
      }
  }
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private profileService: ProfileService) {
      this.profileService.getIdiomas().subscribe(x => this.idiomas = x);
      this.profileService.getNivelesIdiomas().subscribe(x => this.niveles = x);

     route.params.subscribe(params => {
         const idioma = params['idioma'];
         if (idioma === undefined) {
             this.nuevoIdioma = true;
         }
         this.idIdioma = idioma;
         this.seleccionadoOtro = false;

     });

    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (!this.nuevoIdioma) {

        this.idiomaActual = this.userProfile.languages.filter(x => {
            return x.uid == this.idIdioma;
        })[0];


    } else {
        this.idiomaActual = {};
    }

      this.langForm =
        this.formBuilder.group(
            {
                idioma: [this.idiomaActual.language,
                    [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
                nivel: [this.idiomaActual.level,
                     Validators.required],
                fecha: [this.idiomaActual.date,
                    [Validators.required, Validators.pattern('\\d\\d/\\d\\d/\\d\\d\\d\\d')]]



            });

  }

  compruebaOtro() {
      if(!this.idiomas.includes( this.idiomaActual.language) && !this.nuevoIdioma){
          this.seleccionadoOtro = true;
          // document.getElementById("idioma").setAttribute("value", "Otro");
      }
      else
          this.seleccionadoOtro = false;

  }
    ngOnInit() {

      setTimeout(() =>{this.compruebaOtro();}, 1500);
    }





  onSubmit() {

      this.idiomaActual.language = this.langForm.controls.idioma.value;
      this.idiomaActual.level = this.langForm.controls.nivel.value;
      this.idiomaActual.date = this.langForm.controls.fecha.value;




      if (this.nuevoIdioma) {
       this.idiomaActual.uid = this.userProfile.languages.length;
        this.userProfile.languages.push(this.idiomaActual);
   } else {

       this.userProfile.languages[this.idiomaActual.uid] = this.idiomaActual;
   }
   localStorage.removeItem('userProfile');
   localStorage.setItem('userProfile', JSON.stringify(this.userProfile));
      this.profileService.updateProfile(this.userProfile).subscribe(x => {
          this.router.navigate(['admin/profile']);
      });
    }
}
