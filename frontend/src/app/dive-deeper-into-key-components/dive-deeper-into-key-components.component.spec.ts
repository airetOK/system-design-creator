import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveDeeperIntoKeyComponentsComponent } from './dive-deeper-into-key-components.component';

describe('DiveDeeperIntoKeyComponentsComponent', () => {
  let component: DiveDeeperIntoKeyComponentsComponent;
  let fixture: ComponentFixture<DiveDeeperIntoKeyComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiveDeeperIntoKeyComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiveDeeperIntoKeyComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
