import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ContainerComponent} from './container.component';
import {ContainerService} from './container.service';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    ContainerService
  ],
  entryComponents: [],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule {}
