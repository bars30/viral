import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetanailReviewHealthyNailsComponent } from './metanail-review-healthy-nails.component';

describe('MetanailReviewHealthyNailsComponent', () => {
  let component: MetanailReviewHealthyNailsComponent;
  let fixture: ComponentFixture<MetanailReviewHealthyNailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetanailReviewHealthyNailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetanailReviewHealthyNailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
