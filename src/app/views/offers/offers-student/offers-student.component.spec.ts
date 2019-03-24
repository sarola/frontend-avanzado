import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersStudentComponent } from './offers-student.component';

describe('OffersStudentComponent', () => {
  let component: OffersStudentComponent;
  let fixture: ComponentFixture<OffersStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
