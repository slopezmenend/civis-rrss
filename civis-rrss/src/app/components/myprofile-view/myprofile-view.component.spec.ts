import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileViewComponent } from './myprofile-view.component';

describe('MyprofileViewComponent', () => {
  let component: MyprofileViewComponent;
  let fixture: ComponentFixture<MyprofileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprofileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
