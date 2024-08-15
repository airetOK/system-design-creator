import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignApiAndCommunicationProtocolsComponent } from './design-api-and-communication-protocols.component';

describe('DesignApiAndCommunicationProtocolsComponent', () => {
  let component: DesignApiAndCommunicationProtocolsComponent;
  let fixture: ComponentFixture<DesignApiAndCommunicationProtocolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignApiAndCommunicationProtocolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignApiAndCommunicationProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
