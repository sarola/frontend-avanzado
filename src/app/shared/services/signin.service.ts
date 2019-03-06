import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
/* import { UserOptions } from '../models/user'; */
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of, Observable, throwError, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
/* import { AppStore } from '../states/store.inteface';
import { Store } from '@ngrx/store';
import * as UserActions from 'app/shared/states/user/actions';
import { User } from 'app/shared/models/user'; */
import {InMemoryDataService} from '../inmemory-db/inmemory-db.service';

@Injectable()
export class SigninService {
    users_endpoint = 'api/users';
    user_endpoint = 'api/user';
    users :any;
    currentUser: Observable<{id, username, token}>;
    currentUserSubject:  BehaviorSubject<{id, username, token}>;

  private mockUser = {
    id: 0,
    username: 'email@email.com',
    password:'password'
   
  } as any /* UserOptions */;

  constructor(
    private http: HttpClient/* , private store$: Store<AppStore> */
  ) {
    this.currentUserSubject = new BehaviorSubject<{id, username, token}>(JSON.parse(localStorage.getItem('currentUser')));
    console.log("currentUserSubject: " + JSON.stringify(this.currentUserSubject));
        this.currentUser = this.currentUserSubject.asObservable();
  }
   public get currentUserValue(): {id, username, token} {
        return this.currentUserSubject.value;
    }

getUsers() {

        return this.http.get<any>(this.users_endpoint);
             
    }

    getUser(id:number) {

        return this.http.get<any>(this.user_endpoint + "/" + id);
             
    }
login(username:string, password:string){
 /*return this.http.post<any>(this.users_endpoint).pipe(map((users:{id, username, password}[]) => {

     console.log("userServiceTotal: " + JSON.stringify(users));
     console.log("userServiceActual: " + username);

     let filteredUsers = users.filter(user => {
                    return user.username === username && user.password === password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    let body = {
                        id: user.id,
                        username: user.username,
                        token: 'fake-jwt-token'
                    };
                    console.log(user.id + ", " + user.username + ", " + user.password);
                    localStorage.setItem('currentUser', JSON.stringify(body));

                    this.currentUserSubject.next(body);
                

                return user;
                } else {
                  console.log("Usuario no existe");
                    // else return 400 bad request
                    return null;
                }


                // login successful if there's a jwt token in the response
             
            }));*/


             return this.http.post<any>('api/users/signin', { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    //this.currentUser = user;
                }

                console.log("User service: " + user);

                return user;
            }));

  }

loadUser(id:number){
  return this.http.get<any>('api/users/'+ id)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('userProfile', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    //this.currentUser = user;
                }

                console.log("Profile service: " + user);

                return user;
            }));
}

  logout() {
        // remove user from local storage to log user out
        console.log("localStorage: " + localStorage.getItem("currentUser"));
        //console.log(JSON.stringify(this.currentUser));
        console.log("currentUserLogout: " + this.currentUser);

        localStorage.removeItem('currentUser');
        console.log("currentUserLogout2");
        this.currentUserSubject.next(null);
    }

 
}
