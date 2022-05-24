import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarformComponent } from './comentarform.component';

describe('ComentarformComponent', () => {
  let component: ComentarformComponent;
  let fixture: ComponentFixture<ComentarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
