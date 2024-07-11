import { TestBed } from '@angular/core/testing';

import { MqtteventsService } from './mqttevents.service';

describe('MqtteventsService', () => {
  let service: MqtteventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MqtteventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
