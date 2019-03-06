import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
/* import { UserOptions } from '../models/user'; */
import { HttpClient } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
/* import { AppStore } from '../states/store.inteface';
import { Store } from '@ngrx/store';
import * as UserActions from 'app/shared/states/user/actions';
import { User } from 'app/shared/models/user'; */

@Injectable()
export class ProfileService {
      currentUserSubject:  BehaviorSubject<{id, username, token}>;

  private mockUserStudent = {
    uid: 'pepegarcia',
    name: 'Pepe',
    surname: 'García',
    email: 'pepegarcia@gmail.com',
    roles: [AppSettings.STUDENT_ROL.value],
    avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
    parents: [],
    childrens: [],
    hasFailed: false,
    studies: {
      action: 'SHOW',
      entities: [
        {
          uid: 0,
          level: 'Ciclo formativo',
          title: 'Desarrollo de aplicaciones web',
          institution: 'IES Politécnico Jesús Marin',
          date: '1548320228',
          certificate: false
        },
        {
          uid: 1,
          level: 'Ciclo formativo',
          title: 'Administracion de sistemas informaticos y redes',
          institution: 'IES Politécnico Jesús Marin',
          date: '1397293028',
          certificate: true
        }
      ]
    },
    experiences: {
      action: 'SHOW',
      entities: [
        {
          uid: 0,
          company: 'Suma',
          position: 'Junior',
          date: '1548320228'
        },
        {
          uid: 0,
          company: 'Indra',
          position: 'engineer',
          date: '1548320228'
        }
      ]
    },

    languages: {
      action: 'SHOW',
      entities: [
        {
          uid: 0,
          level: '6',
          name: 'English',
          date: '1548320228'
        },
        {
          uid: 0,
          level: '4',
          name: 'French',
          date: '1548320228'
        }
      ]
    },

    offers: {
      entities: [
        {
          position: 'Professor Extraescolars programació i robòtica educativa',
          company: 'Eixos Creativa',
          family: 'Informática y Comunicaciones',
          date: '30/01/2019'
        },
        {
          position: 'Programaador Jr Java',
          company: 'Ki - Works',
          family: 'Informática y Comunicaciones',
          date: '28/01/2019'
        },
        {
          position: 'Programador.net',
          company: 'Tecnic Consultores',
          family: 'Informática y Comunicaciones',
          date: '28/01/2019'
        },
        {
          position: 'Programador Junior Java Spring boot',
          company: 'GRUPO CMC',
          family: 'Informática y Comunicaciones',
          date: '25/01/2019'
        },
        {
          position: 'Administrativa',
          company: 'Servium',
          family: 'Administración y Gestión',
          date: '25/01/2019'
        },
        {
          position: 'DESARROLLADOR/A SOFTWARE',
          company: 'PEPPER',
          family: 'Informática y Comunicaciones',
          date: '23/01/2019'
        }
      ]
    }
  } as any /* UserOptions */;


   private mockUser = {
    uid: 'ajvazquez',
    name: 'Antonio Jesús',
    surname: 'Vázquez Muñoz',
    email: 'usuario1@mail.com',
    roles: [AppSettings.COMPANY_ROL.value],
    avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
    parents: [],
    childrens: [],
    hasFailed: false,
    studies: {
      action: 'SHOW',
      entities: [
        {
          uid: 0,
          level: 'Ciclo formativo',
          title: 'Desarrollo de aplicaciones web',
          institution: 'IES Politécnico Jesús Marin',
          date: '1548320228',
          certificate: false
        },
        {
          uid: 1,
          level: 'Ciclo formativo',
          title: 'Administracion de sistemas informaticos y redes',
          institution: 'IES Politécnico Jesús Marin',
          date: '1397293028',
          certificate: true
        }
      ]
    },
    experiences: {
      action: 'SHOW',
      entities: [
        {
          uid: 0,
          company: 'Suma',
          position: 'Junior',
          date: '1548320228'
        },
        {
          uid: 0,
          company: 'Indra',
          position: 'engineer',
          date: '1548320228'
        }
      ]
    },

    languages: {
      action: 'SHOW',
      entities: [
        {
          uid: 0,
          level: '6',
          name: 'English',
          date: '1548320228'
        },
        {
          uid: 0,
          level: '4',
          name: 'French',
          date: '1548320228'
        }
      ]
    },

    offers: {
      entities: [
        {
          position: 'Professor Extraescolars programació i robòtica educativa',
          company: 'Eixos Creativa',
          family: 'Informática y Comunicaciones',
          date: '30/01/2019'
        },
        {
          position: 'Programaador Jr Java',
          company: 'Ki - Works',
          family: 'Informática y Comunicaciones',
          date: '28/01/2019'
        },
        {
          position: 'Programador.net',
          company: 'Tecnic Consultores',
          family: 'Informática y Comunicaciones',
          date: '28/01/2019'
        },
        {
          position: 'Programador Junior Java Spring boot',
          company: 'GRUPO CMC',
          family: 'Informática y Comunicaciones',
          date: '25/01/2019'
        },
        {
          position: 'Administrativa',
          company: 'Servium',
          family: 'Administración y Gestión',
          date: '25/01/2019'
        },
        {
          position: 'DESARROLLADOR/A SOFTWARE',
          company: 'PEPPER',
          family: 'Informática y Comunicaciones',
          date: '23/01/2019'
        }
      ]
    }
  } as any /* UserOptions */;




private userProba = 
{



  id: 1,
    name: "pepa",
    surname: "perez",
    email: "usuario1@mail.com",
    roles: [AppSettings.STUDENT_ROL],
    avatar_name: "assets/img/perfil.png",
    fecha_nacimiento: "01/01/2001",
    telefono:"678678678",
    nif:"55224411V",
    permisos_conducir:["B", "A1"],
    about_me: "algo sobre mi",
    other_competency: "otras competencias",
    direccion: "Pedriñas 9",

     studies: 
    
    [
      {
          uid: 0,
            level: "FP",
            title: "DAM",
            institution: "Leliadoura",
            date: "2014",
            certificate: true
      },
      {
          uid: 1,
            level: "FP",
            title: "ASIR",
            institution: "Leliadoura",
            date: "2016",
            certificate: false

      }
    ],
    experiences:[
    {
      uid:0,
      company:"Indra",
      job:"Programador",
      dates:"01/01/2014 - 01/01/2015"


    },
    {
       uid:0,
      company:"Inditex",
      job:"Programador",
      dates:"01/03/2015 - 01/01/2016"

    }

    ],
    languages:[
    {
      uid:0,
      level:"C1",
      language:"Inglés",
      date:"01/01/2015"


    },
    {
      uid:0,
      level:"C2",
      language:"Francés",
      date:"01/01/2017"

    }

    ]
   
          
  
 } as any;



private userProba2 = 
{



  id: 2,
    name: "pedro",
    surname: "paz",
    email: "usuario2@mail.com",
    roles: [AppSettings.COMPANY_ROL],
    avatar_name: "assets/img/perfil.png",
    fecha_nacimiento: "01/01/2001",
    nif:"55287541K",
    telefono:"654654654",
    permisos_conducir:["B", "A1"],
    about_me: "algo sobre mi",
    other_competency: "otras competencias",
    direccion: "Vilar 7",
    studies: 
    [
      {
          uid: 0,
            level: "FP",
            title: "DAM",
            institution: "Leliadoura",
            date: "2014",
            certificate: false
      },
      {
          uid: 1,
            level: "FP",
            title: "ASIR",
            institution: "Leliadoura",
            date: "2016",
            certificate: false

      }
    ]
   
          
  
 } as any;

 private usersProba = [this.userProba, this.userProba2];

 loadUsersProba(){
   return of (this.usersProba as User[]);
 }

loadUserProba(){
  return of (this.userProba as User);
}
/*Nombre y apellidos ◦ Correo electrónico.
◦ Fecha de nacimiento.
◦ Teléfono de contacto.
◦ NIF/NIE.
◦ Sobre mí (una breve descripción).
◦ Otras competencias (una breve descripción).
◦ Permisos de conducir (un breve texto).
◦ Dirección (un breve texto).
•  Formación Académica (una tabla resumen en la que cada fila contendrá la siguiente información):
◦ Nivel, con uno de los siguientes dos valores:
▪ Ciclo Formativo (Grado superior, Grado medio o Formación Básica).
▪ Universidad (Grado, Diplomado, Licenciado/Ingeniero, Máster, Doctorado).
◦ Título (El título académico que tiene), algunos ejemplos:
▪ Nivel (Ciclo formativo) - Desarrollo de Aplicaciones Web.
▪ Nivel (Universidad) - Ingeniero en Informática
◦ Centro (Nombre del IES)
◦ Fecha
◦ Certificado (Documento con el documento del título o certificado).
•  Experiencia Laboral (una tabla resumen en la que cada fila contendrá la siguiente información):
◦ Empresa
◦ Puesto
◦ Fechas
•  Idiomas (una tabla resumen en la que cada fila contendrá la siguiente información):
◦ Nivel (A1, A2, B1, B2, C1, C2).
◦ Idioma.
◦ Fecha.
*/




private mockUsers =[ this.mockUser, this.mockUserStudent];
  constructor(
    private http: HttpClient /* , private store$: Store<AppStore> */
  ) {}

  loadProfileStudent(): Observable<any /* UserOptions */> {
    return of(this.mockUserStudent as any);
    //return this.http.get<UserOptions>(AppSettings.API_ENDPOINT_USER_ME);
  }
   loadProfileCompany(): Observable<any /* UserOptions */> {
    return of(this.mockUser as any);
    //return this.http.get<UserOptions>(AppSettings.API_ENDPOINT_USER_ME);
  }

  loadProfiles():Observable<any[]>{
    return of(this.mockUsers as any[]);
  }
  logout(): void {
    /*  this.store$.dispatch(new UserActions.Logout()); */
  }
  public updateProfile(profile: any /* User */): Observable<any /* User */> {
    /*if (Math.random() > 0.5) {
      return this.http.put<TokenResponse>(AppSettings.API_ENDPOINT_USER_ME, profile);
    }*/
    this.mockUser = { ...profile };
    return of(this.mockUser as any /* User */);
  }
  public signupProfile(profile: any /* UserOptions */): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_USER_CREATE,
      profile
    );
  }
  public requestRememberPassword(uid: { uid: string }): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD,
      uid
    );
  }
  public rememberPassword(uidAndHash: {
    uid: string;
    hash: string;
  }): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_USER_REMEMBER_PASSWORD,
      uidAndHash
    );
  }
  public confirmUser(uidAndHash: {
    uid: string;
    hash: string;
  }): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_CONFIRM_USER,
      uidAndHash
    );
  }
}
