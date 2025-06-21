import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSkincareTools7Component } from './best-skincare-tools-7.component';

describe('BestSkincareTools7Component', () => {
  let component: BestSkincareTools7Component;
  let fixture: ComponentFixture<BestSkincareTools7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSkincareTools7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSkincareTools7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
