import { NgModule, Optional, SkipSelf, Provider } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
/* import { JWTInterceptor } from './interceptors/jwt.interceptor'; */
/* import { JwtExpiredInterceptor } from './interceptors/jwt-expired.interceptor'; */

/* import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; */

/* import { metaReducers, reducers } from './states/root.reducer';
import { AuthEffects } from './states/auth/effects/auth.effects';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './states/router/effects/router.effects';

import { UserEffects } from './states/user/effects/user.effects';
import { AppEffects } from './states/app/effects'; */
/* import { UsersEffects } from './states/users/effects'; */
/* import { UsersService } from '../views/users/shared/users.service'; */
import { ProfileService } from './services/profile.service';

/* import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertService } from './services/alert/alert.service';
import {SigninService} from './services/signin.service';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {usersProvider} from './interceptors/users.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpClientInMemoryWebApiModule, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/inmemory-db.service';
import {SharedModule} from './shared.module'

/* export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
} */

export const CORE_SERVICES: Provider[] = [
  ProfileService,
  SigninService,
  AlertService,
{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  },

  usersProvider,
    InMemoryDataService
  /*   { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
  { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  { provide: RouterStateSerializer, useClass: CustomSerializer }, */
  /* {
    provide: MatPaginatorIntl,
    useClass: DatatablePaginatorIntl,
    deps: [TranslateService],
  }, */
];

@NgModule({
  imports: [
   // BrowserAnimationsModule,
    HttpClientModule,

    /*     StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    EffectsModule.forRoot([
      AppEffects,
      AuthEffects,
      UserEffects,
      RouterEffects
    ]),*/
    /*  TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }) */
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService
    )
  ],
  providers: CORE_SERVICES
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
