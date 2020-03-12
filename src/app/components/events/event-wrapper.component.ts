import {
  Component,
  Type,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ChangeDetectorRef,
  ComponentRef,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { FakeDataProviderService } from '@services/fake-data-provider.service';
import {
  EventTypes,
  IEventData,
  IEventInputData
} from '@models/index';

import {
  AcceptedComponent,
  DoneComponent,
  ChangedComponent
} from '@components/events/index';

@Component({
  selector: 'app-event-wrapper',
  templateUrl: './event-wrapper.component.html',
  styleUrls: ['./event-wrapper.component.scss']
})
export class EventWrapperComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('eventContainer', {read: ViewContainerRef}) eventContainer;
  public data: IEventData;
  public componentRef: ComponentRef<IEventInputData>;

  constructor(private fakeDataProviderService: FakeDataProviderService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private cdr: ChangeDetectorRef) {
    this.data = fakeDataProviderService.getFakeData();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getViewController();
    this.cdr.detectChanges();
  }

  createComponent(T: Type<IEventInputData>): void {
    this.eventContainer.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory<IEventInputData>(T);
    this.componentRef = this.eventContainer.createComponent(factory);
    this.componentRef.instance.data = this.data;
  }

  getViewController(): void | never {
    switch (this.data.eventName) {
      case EventTypes.DONE: {
        this.createComponent(DoneComponent);
        break;
      }
      case EventTypes.CHANGED: {
        this.createComponent(ChangedComponent);
        break;
      }
      case EventTypes.ACCEPTED: {
        this.createComponent(AcceptedComponent);
        break;
      }
      default: {
       throw new Error('Event type did not find');
      }
    }
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
