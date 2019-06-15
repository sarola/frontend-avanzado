import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {rootRouterConfig} from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './shared/inmemory-db/fake-backend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserModule, TransferState, BrowserTransferStateModule, makeStateKey } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import {MaterialModule} from './shared/material.module';


export const NGRX_STATE = makeStateKey('NGRX_STATE');

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forRoot(rootRouterConfig, { preloadingStrategy: PreloadAllModules  }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
      dataEncapsulation: false
    }),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    //HeaderComponent
  ],
  exports: [RouterModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  public constructor(
      private readonly transferState: TransferState,
      private readonly store: Store<any>,
  ) {
    console.log(this.transferState);
    const isBrowser = this.transferState.hasKey<any>(NGRX_STATE);
    console.log('isBrowser: ' + isBrowser);
    if (isBrowser) {
      this.onBrowser();
    } else {
      this.onServer();
    }
  }

  onServer() {
    console.log('onserver');

    this.transferState.onSerialize(NGRX_STATE, () => {
      let state;
      this.store.subscribe(  (saveState: any)  => {
        //console.log('Set for browser', JSON.stringify(saveState));
        state = saveState;
      }).unsubscribe();

      return state;
    });
  }

  onBrowser() {
    const state = this.transferState.get<any>(NGRX_STATE, null);
 
    this.transferState.remove(NGRX_STATE);
    this.store.dispatch( { type: 'SET_ROOT_STATE', payload: state } );
    //console.log('Got state from server', JSON.stringify(state));
  }

}
