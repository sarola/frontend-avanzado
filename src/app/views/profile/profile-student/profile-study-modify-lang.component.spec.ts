import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStudyModifyLangComponent } from './profile-study-modify-lang.component';

describe('ProfileStudyModifyComponent', () => {
  let component: ProfileStudyModifyLangComponent;
  let fixture: ComponentFixture<ProfileStudyModifyLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileStudyModifyLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStudyModifyLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
