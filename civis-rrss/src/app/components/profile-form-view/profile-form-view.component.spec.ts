import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormViewComponent } from './profile-form-view.component';

describe('ProfileFormViewComponent', () => {
  let component: ProfileFormViewComponent;
  let fixture: ComponentFixture<ProfileFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFormViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
