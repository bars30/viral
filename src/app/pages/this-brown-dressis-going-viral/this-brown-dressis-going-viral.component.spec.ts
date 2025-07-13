import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisBrownDressisGoingViralComponent } from './this-brown-dressis-going-viral.component';

describe('ThisBrownDressisGoingViralComponent', () => {
  let component: ThisBrownDressisGoingViralComponent;
  let fixture: ComponentFixture<ThisBrownDressisGoingViralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThisBrownDressisGoingViralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThisBrownDressisGoingViralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
