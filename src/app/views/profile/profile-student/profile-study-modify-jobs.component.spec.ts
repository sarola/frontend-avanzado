import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStudyModifyJobsComponent } from './profile-study-modify-jobs.component';

describe('ProfileStudyModifyComponent', () => {
  let component: ProfileStudyModifyJobsComponent;
  let fixture: ComponentFixture<ProfileStudyModifyJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileStudyModifyJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStudyModifyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
