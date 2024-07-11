import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";
import { MqtteventsService } from '../../services/mqttevents.service';
import { IMqttServiceOptions } from "ngx-mqtt";

@Component({
  selector: 'app-mqttclient',
  standalone: true,
  imports: [],
  templateUrl: './mqttclient.component.html',
  styleUrl: './mqttclient.component.css',
  providers: [MqtteventsService]

})
export class MQTTClientComponent implements OnInit {
  events!: any[];
  private deviceId: string = "123456";
  subscription!: Subscription;

  MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
    hostname: 'broker.emqx.io',
    port: 1883,
    protocol: "wss",
    path: '',
  };
  constructor(
    private mqttEvent: MqtteventsService,
  ) {
  }

  ngOnInit() {
    this.subscribeToTopic();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private subscribeToTopic() {
    console.log(`Subscribing to topic for device ID: ${this.deviceId}`);
    this.subscription = this.mqttEvent.topic(this.deviceId)
      .subscribe((data: IMqttMessage) => {
        let item = JSON.parse(data.payload.toString());
        this.events.push(item);
      });
  }
}
