import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDesignComponent } from './database-design.component';

describe('DatabaseDesignComponent', () => {
  let component: DatabaseDesignComponent;
  let fixture: ComponentFixture<DatabaseDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
