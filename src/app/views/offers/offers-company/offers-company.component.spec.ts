import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCompanyComponent } from './offers-company.component';

describe('OffersCompanyComponent', () => {
  let component: OffersCompanyComponent;
  let fixture: ComponentFixture<OffersCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
