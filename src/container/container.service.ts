import {AppBaseService} from '../app/app-base.service';
import {Injectable, Injector} from '@angular/core';

@Injectable()
export class ContainerService extends AppBaseService {

  constructor(readonly injector: Injector) {
    super(injector);
  }

  containerGetOutputAngular1String() {
    console.log('container service is work!');
    return this.testGetAngular1String();
  }
}
