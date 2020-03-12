import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventWrapperComponent } from './event-wrapper.component';
import {
  AcceptedComponent,
  DoneComponent,
  ChangedComponent
} from './index';

@NgModule({
  declarations: [DoneComponent, AcceptedComponent, ChangedComponent, EventWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EventWrapperComponent
  ]
})
export class EventTypesModule { }
