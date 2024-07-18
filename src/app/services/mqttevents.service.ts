import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService } from "ngx-mqtt";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MqtteventsService {
  private endpoint: string = 'events';

  constructor(
    private _mqttService: MqttService,
  ) {

  }

  topic(deviceId: string): Observable<IMqttMessage> {
    let topicName = `${this.endpoint}/${deviceId}`;
    return this._mqttService.observe(topicName);
  }
}
