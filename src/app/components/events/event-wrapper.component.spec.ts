import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeDataProviderService } from '@services/fake-data-provider.service';
import { EventWrapperComponent } from './event-wrapper.component';
import { EventInputData } from '@mocks/index';


describe('EventWrapperComponent', () => {
  let component: EventWrapperComponent;
  let fixture: ComponentFixture<EventWrapperComponent>;
  let getViewController: jasmine.Spy;
  // tslint:disable-next-line:no-shadowed-variable
  const fakeDataProviderServiceStub = { getFakeData: IEventData => (EventInputData)};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventWrapperComponent ],
      providers: [
        {provide: FakeDataProviderService, useValue: fakeDataProviderServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventWrapperComponent);
    component = fixture.componentInstance;
    getViewController = spyOn(component, 'getViewController');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('data is equal mock', () => {
    expect(component.data).toEqual(EventInputData);
  });

  it('getViewController have been called', () => {
    expect(getViewController).toHaveBeenCalled();
  });
});
