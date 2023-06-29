import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AuthenticatedLayoutModule} from './layout/authenticated-layout/authenticated-layout.module';
import {AuthenticationLayoutModule} from './layout/authentication-layout/authentication-layout.module';

import {AppService} from './app.service';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticatedLayoutModule,
    AuthenticationLayoutModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (appInit: AppService) => () => appInit.loadConfiguration.toPromise(),
      multi: true,
      deps: [AppService]
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
