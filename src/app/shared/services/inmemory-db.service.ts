 import { InMemoryDbService } from 'angular-in-memory-web-api';
 import {AppSettings} from '../app.settings';
/* import { ChatDB } from './chat-db'; */

export class InMemoryDataService  implements InMemoryDbService  {
  createDb() {

      const ofertas = [
          {
              id: 1,
              puesto: 'Programador',
              empresa: 'Finsa',
              descripcion: 'descripcion',
              familia_profesional: 'Informática',
              fecha: '01/03/2019',
              suscriptores: [],
              aceptados: [],
              provincia: 'Lugo',
              municipio: 'Lugo'
          },
          {
              id: 2,
              puesto: 'Programador',
              empresa: 'Vodafone',
              descripcion: 'descripcion',
              familia_profesional: 'Informática',
              fecha: '11/03/2019',
              suscriptores: [],
              aceptados: [],
              provincia: 'Ourense',
              municipio: 'Carballiño'
          },
          {
              id: 3,
              puesto: 'Administrador',
              empresa: 'Abanca',
              descripcion: 'descripcion',
              familia_profesional: 'Administración',
              fecha: '01/02/2019',
              suscriptores: [],
              aceptados: [],
              provincia: 'A Coruña',
              municipio: 'Rianxo'
          },
          {
              id: 4,
              puesto: 'Programador',
              empresa: 'Los Picapiedra',
              descripcion: 'descripcion',
              familia_profesional: 'Informática',
              fecha: '04/03/2019',
              suscriptores: [],
              provincia: 'A Coruña',
              municipio: 'Padrón'
          },
          {
              id: 5,
              puesto: 'Gestor',
              empresa: 'Los Picapiedra',
              descripcion: 'descripcion',
              suscriptores: [],
              aceptados: [],
              familia_profesional: 'Administración',
              fecha: '09/03/2019',
              provincia: 'Lugo',
              municipio: 'Chantada'
          },
          {
              id: 6,
              puesto: 'Profesor',
              empresa: 'Los Picapiedra',
              descripcion: 'descripcion',
              familia_profesional: 'Docencia',
              fecha: '09/11/2018',
              suscriptores: [],
              aceptados: [],
              provincia: 'Lugo',
              municipio: 'Lugo'
          }
      ] ;
      const idiomas = [
        'Inglés',
        'Francés',
        'Alemán',
        'Italiano',
        'Chino',
        'Español',
        'Catalán',
        'Gallego',
        'Euskera'
      ];
      const provincias= [
        'A Coruña',
        'Lugo',
        'Ourense',
        'Pontevedra'
      ];
      const municipios= [
          {
              nombre: 'Carril',
              provincia: 'Pontevedra',
          },
          {
              nombre: 'Vigo',
              provincia: 'Pontevedra',
          },
          {
              nombre: 'Padrón',
              provincia: 'A Coruña',
          },
          {
              nombre: 'Rianxo',
              provincia: 'A Coruña',
          },
          {
              nombre: 'Chantada',
              provincia: 'Lugo',
          },
          {
              nombre: 'Lugo',
              provincia: 'Lugo',
          },
          {
              nombre: 'Verín',
              provincia: 'Ourense',
          },
          {
              nombre: 'Carballiño',
              provincia: 'Ourense',
          }
      ];
      const centros_educativos = [
        'San Clemente',
      'Leliadoura',
      'Vigo',
      'Pontevedra'
      ];
      const familias_profesionales = [
          'Informática',
          'Administración',
          'Docencia',
          'Náutica'
      ];
      const grados = [
          'FP Básica',
          'Grado Medio',
          'Grado Superior'
      ];
      const ciclos_formativos = [
        {
          familia: 'Informática',
          grado: 'FP Básica',
          ciclos: [
            'PROFESIONAL BÁSICO EN INFORMÁTICA DE OFICINA',
            'PROFESIONAL BÁSICO EN INFORMÁTICA Y COMUNICACIONES',
          ],
        },
        {
          familia: 'Informática',
          grado: 'Grado Medio',
          ciclos: [
            'PROFESIONAL BÁSICO EN INFORMÁTICA DE OFICINA MEDIO',
            'PROFESIONAL BÁSICO EN INFORMÁTICA Y COMUNICACIONES MEDIO',
          ],
        },
        {
          familia: 'Informática',
          grado: 'Grado Superior',
          ciclos: [
            'TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED',

            'TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES MULTIPLATAFORMA'

          ],
        },
        {
          familia: 'Administración',
          grado: 'FP Básica',
          ciclos: [
            'TÉCNICO  EN ADMINISTRACIÓN Y FINANZAS'
          ],
        },
        {
          familia: 'Administración',
          grado: 'Grado Medio',
          ciclos: [
            'TÉCNICO SUPERIOR EN ADMINISTRACIÓN Y FINANZAS MEDIO'
          ]
        }
      ];
      const tipos_documento = [
          'NIF/NIE',
          'Otro',
          'Pasaporte'
      ];
      const tipos_titulo = [
          'Título Universitario',
          'Ciclo formativo',
          'Otro título'
      ];

  const userProba =
          {
              id: 1,
              name: "pepa",
              surname: "perez",
              email: "usuario1@mail.com",
              roles: [AppSettings.STUDENT_ROL],
              avatar_name: "assets/img/perfil.png",
              fecha_nacimiento: "01/01/2001",
              telefono:"678678678",
              telefono2:"652652652",
              tipo_documento:"NIF/NIE",
              num_documento:"55224411V",
              permisos_conducir:"B, A1",
              about_me: "algo sobre mi",
              other_competency: "otras competencias",
              direccion: "Pedriñas 9",
              provincia:"Pontevedra",
              municipio: "Carril",
              idioma: "Español",
              provincias_notificaciones: ['A Coruña' , 'Lugo'],

              studies:
                  [
                      {
                          uid: 0,
                          tipo_titulo:"Ciclo formativo",
                          grado: "Grado Superior",
                          titulo: "TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES MULTIPLATAFORMA",
                          familia_profesional:"Informática",
                          centro: "Leliadoura",
                          date: "20/06/2014",
                          certificate: true,
                          bilingue:false,
                          dual:false
                      },
                      {
                          uid: 1,
                          tipo_titulo:"Ciclo formativo",
                          grado: "Grado Superior",
                          titulo: "TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED",
                          familia_profesional:"Informática",
                          centro: "San Clemente",
                          date: "22/06/2016",
                          certificate: false,
                          bilingue:true,
                          dual:true

                      },
                      {
                          uid: 1,
                          tipo_titulo:"Ciclo formativo",
                          grado: "Grado Superior",
                          titulo: "TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED",
                          familia_profesional:"Administración",
                          centro: "San Clemente",
                          date: "22/06/2012",
                          certificate: false,
                          bilingue:true,
                          dual:true

                      },
                      {
                          uid: 2,
                          tipo_titulo:"Título Universitario",
                          titulo: "Ingeniería Informática",
                          centro: "USC",
                          familia_profesional: "Informática",
                          date: "25/06/2018",
                          certificate: true,
                          bilingue:true

                      },
                      {
                          uid: 3,
                          tipo_titulo:"Otro título",
                          titulo: "Curso de Submarinismo",
                          centro: "Escuela náutica de Ribeira",
                          familia_profesional:"Naval",
                          date: "25/04/2018",
                          certificate: true

                      }
                  ],
              experiences:[
                  {
                      uid:0,
                      empresa: "Indra",
                      puesto:"Programador",
                      fecha_i:"01/01/2014",
                      fecha_f:"01/01/2015",
                      tareas:"Desarrollar app"


                  },
                  {
                      uid:0,
                      empresa: "Inditex",
                      puesto:"Programador",
                      fecha_i:"01/03/2015",
                      fecha_f:"01/01/2016",
                      tareas:"Desarrollar web"

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

  const userProba2 =
          {
              id: 2,
              email: "usuario2@mail.com",
              nombre_comercial: "Los Picapiedra",
              razon_social:"Picapiedra S.L.",
              roles: [AppSettings.COMPANY_ROL],
              avatar_name: "assets/img/perfil.png",
              fecha_nacimiento: "01/01/2001",
              tipo_documento:"Otro",
              num_documento:"B1587541K",
              telefono:"654654654",
              telefono2:"632632632",
              permisos_conducir:"B",
              about_me: "algo sobre mi",
              other_competency: "otras competencias",
              direccion: "Vilar 7",
              provincia:"Lugo",
              municipio: "Lugo",
              url:"lospicapiedra.com",
              idioma: "Español",
              provincias_notificaciones: ['A Coruña' , 'Lugo'],
              datos_contacto: {
                  nombre: "Pedro",
                  apellidos: "Picapiedra",
                  telefono:"699699699",
                  email:"usuario2@mail.com"
              }
          } as any;
      const users = [
          userProba,
          userProba2
      ];
      const niveles_idiomas = [
          'A1', 'A2', 'B1', 'B2', 'C1', 'C2'
      ];

      return {centros_educativos, ciclos_formativos, familias_profesionales, grados, idiomas, ofertas: ofertas, provincias,
          municipios, tipos_documento, tipos_titulo, users, niveles_idiomas};
  }
}
