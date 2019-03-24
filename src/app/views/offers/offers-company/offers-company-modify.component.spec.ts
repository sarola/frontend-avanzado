import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCompanyModifyComponent } from './offers-company-modify.component';

describe('OffersCompanyModifyComponent', () => {
  let component: OffersCompanyModifyComponent;
  let fixture: ComponentFixture<OffersCompanyModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersCompanyModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersCompanyModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
