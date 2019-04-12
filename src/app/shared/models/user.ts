
export class Credentials {
    email: string;
    password: string;
}
export class User {
	uid: string;
    name: string;
    surname: string;
    email: string;
    roles: [];
    avatar_hash: string;
    studies: 
   {
          uid: number,
          level: string,
          title: string,
          institution: string,
          date: string,
          certificate: boolean
   }[];
            
     
    /*experiences: 

        {
          uid: number,
          company: string,
          position: string,
          date: string,
        };
    

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
    };

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
    };*/

	
}
