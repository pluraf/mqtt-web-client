import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";
import { MqtteventsService } from '../../services/mqttevents.service';
import { CommonModule } from '@angular/common';
import { MqttConfigModule } from '../../mqttconfig/mqttconfig.module';



@Component({
  selector: 'app-mqttclient',
  standalone: true,
  imports: [CommonModule,
    MqttConfigModule],
  templateUrl: './mqttclient.component.html',
  styleUrl: './mqttclient.component.css',
  providers: [MqtteventsService]

})
export class MQTTClientComponent implements OnInit {
  events!: any[];
  private deviceId: string = "123456";
  subscription!: Subscription;


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
