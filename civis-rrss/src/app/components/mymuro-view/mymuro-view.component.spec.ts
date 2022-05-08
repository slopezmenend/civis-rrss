import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuroViewComponent } from './mymuro-view.component';

describe('MuroViewComponent', () => {
  let component: MuroViewComponent;
  let fixture: ComponentFixture<MuroViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuroViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
