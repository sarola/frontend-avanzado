import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCompanyModifyComponent } from './profile-company-modify.component';

describe('ProfileCompanyModifyComponent', () => {
  let component: ProfileCompanyModifyComponent;
  let fixture: ComponentFixture<ProfileCompanyModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCompanyModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCompanyModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
