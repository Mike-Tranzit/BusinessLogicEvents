import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { DoneComponent } from './done.component';
import { EventInputData } from '@mocks/index';

describe('DoneComponent', () => {
  let component: DoneComponent;
  let fixture: ComponentFixture<DoneComponent>;
  let compiled;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    component.data = EventInputData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name is not undefined', () => {
    expect(compiled.querySelector('div i').textContent).toContain(EventInputData.userName);
  });

  it('date is correct transform', () => {
    const transformDate =  new DatePipe('en-US').transform(EventInputData.dateOfAction, 'dd.MM.yyyy');
    expect(compiled.querySelector('div').textContent).toContain(transformDate);
  });
});
