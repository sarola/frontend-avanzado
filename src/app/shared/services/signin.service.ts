import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/shared/app.settings';
import {map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable()
export class SigninService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(AppSettings.API_ENDPOINT_USERS).toPromise();
  }

public login({email, password}){
  return this.http.get<any[]> (AppSettings.API_ENDPOINT_USERS).pipe(map(items => {
    const filtered = items.filter(x => x.email === email && x.password === password);

    if(filtered.length > 0)
      return filtered;
    else{
      throwError('Usuario incorrecto');
    }
  }));
}

  async login2({ email, password }): Promise<any> {
    const users = await this.getUsers();
    console.log('users: ' + users);
    // Mock response from backend:
    return users.find(
      (user: any) => user.email === email && user.password === password
    );
  }
}
