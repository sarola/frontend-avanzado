import * as fromAuth from './auth.effects';
import {TestBed} from '@angular/core/testing';
import {AuthEffects} from './auth.effects';
import * as fromActions from '../actions/auth.actions';
import {cold, hot} from 'jasmine-marbles';
import {Observable, of} from 'rxjs';
import {provideMockActions} from '@ngrx/effects/testing';
import {AuthService} from '../../../services/auth.service';
import {NotificationsService} from '../../../services/notifications.service';
import {Actions} from '@ngrx/effects';

export class TestActions extends Actions {
    constructor(){
        super();
    }
    set stream(source: Observable<any>){
        this.source = source;
    }
}
export function getActions() {
    return new TestActions();
}
describe('AuthEffects', () => {
    let effects: AuthEffects;
    let actions: Observable<any>;
    let authService: jasmine.SpyObj<AuthService>;
    let notificationsService: jasmine.SpyObj<NotificationsService>;
    let httpClientSpy: {get: jasmine.Spy};
    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                AuthEffects,
                 provideMockActions(() => actions),
                {
                    provide: AuthService,
                    useValue: {
                        login: jasmine.createSpy()
                    }
                },
                {
                    provide: NotificationsService,
                    useValue: jasmine.createSpy()
                }
            ],
        });
        actions = TestBed.get(Actions);
        effects = TestBed.get(AuthEffects);
        authService = TestBed.get(AuthService);
        notificationsService = TestBed.get(NotificationsService);
        // authService.login.and.returnValue(of(true));

    });
    describe('Login', () => {
        it('loginSuccess$', () => {
            const user = {email: 'mail@mail.com', password: 'password'};
            const token = {token: 'tokenPrueba'};
            const action = new fromActions.Identification(user);
            const outcome = new fromActions.IdentificationSuccess(token);
            actions = hot('-a', {a: action});
            const response = cold ('-a|', {a: token});
            const expected = cold('--b', {b: outcome});
            authService.login.and.returnValue(response);

             expect(effects.login$).toBeObservable(expected);


        });
        it('loginFailed$', () => {
            const user = {email: 'mail@mail.com', password: 'password'};
            const error = new Error('error') as any;
            const action = new fromActions.Identification(user);
            const outcome = new fromActions.IdentificationFailed(error);
            actions = hot('-a', {a: action});
            const response = cold ('-#|',{}, error);
            const expected = cold('--(b|', {b: outcome});
            authService.login.and.returnValue(response);

            // expect(effects.login$).toBeObservable(expected);


        });
    });

});
