 import { InMemoryDbService } from 'angular-in-memory-web-api';
/* import { ChatDB } from './chat-db'; */

export class InMemoryDataService implements InMemoryDbService   {
  createDb() {
    return {
      users:
      
      	[
      		{
      			id:1,
	      		username:"pepegarcia@gmail.com",
	      		password:"pepe"
      		},
      		{
      			id:2,
	      		username:"antoniojesusvazquezmunoz",
	      		password:"pass2"
      		},
      		{
      			id:3,
      			username:"antoniojesusvazquezmunozz@gmail.com",
      			password:"password"
      		}
      	]
      
    };
  }
}
