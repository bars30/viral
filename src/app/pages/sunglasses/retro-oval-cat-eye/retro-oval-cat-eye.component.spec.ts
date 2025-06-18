import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroOvalCatEyeComponent } from './retro-oval-cat-eye.component';

describe('RetroOvalCatEyeComponent', () => {
  let component: RetroOvalCatEyeComponent;
  let fixture: ComponentFixture<RetroOvalCatEyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroOvalCatEyeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroOvalCatEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
