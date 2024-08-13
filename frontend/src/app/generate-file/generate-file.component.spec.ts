import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFileComponent } from './generate-file.component';

describe('GenerateFileComponent', () => {
  let component: GenerateFileComponent;
  let fixture: ComponentFixture<GenerateFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
