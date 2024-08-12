import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarifyRequirementsComponent } from './clarify-requirements.component';

describe('ClarifyRequirementsComponent', () => {
  let component: ClarifyRequirementsComponent;
  let fixture: ComponentFixture<ClarifyRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClarifyRequirementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClarifyRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
