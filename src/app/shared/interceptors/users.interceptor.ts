import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import {ProfileService} from '../services/profile.service';

@Injectable()
export class UsersInterceptor implements HttpInterceptor {

    constructor(private profileService: ProfileService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in local storage for registered users
        const users: any[] = JSON.parse(localStorage.getItem('users')) || [];
        const usersProfile: any[] = JSON.parse(localStorage.getItem('usersProfile')) || [];
        let usersProfileArray: any[];
        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/users/signin') && request.method === 'POST') {
                console.log('imos pa users/signin');
                // find if any user matches login credentials
                const filteredUsers = users.filter(user => {
                    return user.username === request.body.username && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    const user = filteredUsers[0];
                    const body = {
                        id: user.id,
                        username: user.username,

                        token: 'fake-jwt-token'
                    };

                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    console.log('Incorrectos!');
                    // else return 400 bad request
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }

            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                console.log('Authorization: ' + request.headers.get('Authorization'));
// check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: users }));
                } else {console.log('401 error get users' );
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented
                // server side in a real application
                console.log("pedimos authorization");
                console.log("pedimos authorization: " + request.headers.get("Authorizarion"));

                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    const id = parseInt(urlParts[urlParts.length - 1]);
                   // let matchedUsers = users.filter(user => { return user.id === id; });
                    const users = this.profileService.loadUsersProba();


                    users.subscribe(x => usersProfileArray = x);
                    console.log(usersProfileArray);
                    console.log("usersProfile2: " + usersProfileArray);

                    const userProfile = usersProfileArray.filter(item => {return  item.id === id})[0];
                    console.log("userProfileFilter: " + userProfile);

                    // profileservice

                    return of(new HttpResponse({ status: 200, body: userProfile }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    console.log('401 error get user by id' );
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }


            // pass through any requests not handled above
            return next.handle(request);

        }))

        // call materialize and dematerialize to ensure delay even if an error is thrown
        // (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export let usersProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: UsersInterceptor,
    multi: true
};
