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
  OnDestroy, Input
} from '@angular/core';
import { FakeDataProviderService } from '@services/fake-data-provider.service';
import {
  IEventData,
  IEventInputData
} from '@models/index';

@Component({
  selector: 'app-event-wrapper',
  templateUrl: './event-wrapper.component.html',
  styleUrls: ['./event-wrapper.component.scss']
})
export class EventWrapperComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('eventContainer', {read: ViewContainerRef}) eventContainer;
  @Input('eventComponent') eventComponent: Type<IEventInputData>;
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
    this.createComponent();
    this.cdr.detectChanges();
  }

  createComponent(): void {
    this.eventContainer.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory<IEventInputData>(this.eventComponent);
    this.componentRef = this.eventContainer.createComponent(factory);
    this.componentRef.instance.data = this.data;
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
