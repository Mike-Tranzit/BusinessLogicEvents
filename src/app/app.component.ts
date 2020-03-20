import { Component, Type } from '@angular/core';
import {
  AcceptedComponent,
  DoneComponent,
  ChangedComponent
} from '@components/events/index';
import {
  IEventInputData
} from '@models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public eventComponents: Array<Type<IEventInputData>> = [];
  constructor() {
    this.eventComponents = [AcceptedComponent, DoneComponent, ChangedComponent];
  }
}
