import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStudyModifyComponent } from './profile-study-modify.component';

describe('ProfileStudyModifyComponent', () => {
  let component: ProfileStudyModifyComponent;
  let fixture: ComponentFixture<ProfileStudyModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileStudyModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStudyModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
