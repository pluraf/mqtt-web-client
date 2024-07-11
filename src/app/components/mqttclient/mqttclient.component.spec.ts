import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MQTTClientComponent } from './mqttclient.component';

describe('MQTTClientComponent', () => {
  let component: MQTTClientComponent;
  let fixture: ComponentFixture<MQTTClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MQTTClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MQTTClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
