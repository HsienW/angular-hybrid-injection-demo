import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ContainerModule} from '../container/container.module';
import {AppComponent} from './app.component';
import {AppBaseService} from './app-base.service';
import {UpgradeModule} from '@angular/upgrade/static';

import {Angular1InjectorServiceProvider} from './angular1-injector.service.provider';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UpgradeModule,
    BrowserModule,
    ContainerModule
  ],
  providers: [
    Angular1InjectorServiceProvider,
    AppBaseService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
    if (document.getElementById('angular1-root')) {
      this.upgrade.bootstrap(document.querySelector('#angular1'), ['angular1']);
    }
  }
}
