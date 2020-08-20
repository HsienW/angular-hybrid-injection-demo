import {Component, OnInit} from '@angular/core';
import {ContainerService} from './container.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(
    private containerService: ContainerService,
  ) {}

  ngOnInit() {
    console.log('ContainerComponent init success!');
  }

  logAngular1String() {
    console.log('click is work!');
    this.containerService.containerGetOutputAngular1String();
  }
}
