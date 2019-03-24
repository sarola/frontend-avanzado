import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SigninService } from '../services/signin.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private signinService: SigninService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.signinService.currentUserValue;
        let userAux = JSON.parse(localStorage.getItem("currentUser"));

        // console.log("interceptor: " + currentUser.token);
        if (userAux && userAux.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${userAux.token}`
                }
            });
        }

        return next.handle(request);
    }
}
