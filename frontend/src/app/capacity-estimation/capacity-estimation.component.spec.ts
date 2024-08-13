import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityEstimationComponent } from './capacity-estimation.component';

describe('CapacityEstimationComponent', () => {
  let component: CapacityEstimationComponent;
  let fixture: ComponentFixture<CapacityEstimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapacityEstimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacityEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
