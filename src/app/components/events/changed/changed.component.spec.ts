import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedComponent } from './changed.component';

describe('ChangedComponent', () => {
  let component: ChangedComponent;
  let fixture: ComponentFixture<ChangedComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('highlighting text is visible', () => {
    expect(compiled.querySelector('div span').textContent).toContain('change');
  });
});
