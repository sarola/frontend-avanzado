import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {InMemoryDataService} from './shared/inmemory-db/inmemory-db.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import {ProfileModule} from './views/profile/profile.module';
import {OffersModule} from './views/offers/offers.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {ConfigModule} from './views/config/config.module';


@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    HttpClientModule,
    BrowserModule,
    ProfileModule,
    OffersModule,
    ConfigModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [AppComponent],
  providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
		

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
