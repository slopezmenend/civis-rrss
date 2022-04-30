import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSideViewComponent } from './profile-side-view.component';

describe('ProfileSideViewComponent', () => {
  let component: ProfileSideViewComponent;
  let fixture: ComponentFixture<ProfileSideViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSideViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
