import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';

import { Injector } from '@angular/core';
import {
  IMqttMessage,
  IMqttServiceOptions,
  MqttService,
  IPublishOptions,
} from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { MqttConfigModule } from '../../../mqttconfig/mqttconfig.module';

interface QoSList {
  label: string;
  value: number;
}
interface ConnectionList {
  label: string;
  value: number;
}
@Component({
  selector: 'app-publish',
  standalone: true,
  imports: [FormsModule, InputTextareaModule, ButtonModule, TabViewModule, CommonModule, RouterModule, MqttConfigModule, DropdownModule],
  templateUrl: './publish.component.html',
  styleUrl: './publish.component.css'
})
export class PublishComponent implements OnInit {
  private _mqttService!: MqttService;
  client: MqttService | undefined;

  qosList: QoSList[] | undefined;
  selectedQoS: QoSList | undefined;
  showPublishInfo: string = "";
  showTopic: string = "";
  connectionList: ConnectionList[] | undefined;
  selectedConnection: ConnectionList | undefined;
  hideElements: boolean = false;

  onClick(): void {
    console.log('Button clicked');
    this.hideElements = true;
  }

  ngOnInit() {
    this.qosList = [
      { label: "QoS: 0", value: 0 },
      { label: "QoS: 1", value: 1 },
      { label: "QoS: 2", value: 2 },
    ];
    this.connectionList = [
      { label: "Connection 1", value: 0 },
      { label: "Connection 2", value: 1 },
    ];
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private injector: Injector
  ) {

  }

  activeIndex: number = 0;
  scrollableTabs: any[] = Array.from({ length: 3 }, (_, i) => ({ title: `Tab ${i + 1}`, content: "Content" }));

  private curSubscription: Subscription | undefined;
  connection = {
    hostname: 'broker.emqx.io',
    port: 8083,
    path: '/mqtt',
    clean: true,
    connectTimeout: 4000,
    reconnectPeriod: 4000,
    // Authentication information
    clientId: 'mqttx_597046f4',
    username: 'emqx_test',
    password: 'emqx_test',
    protocol: 'ws',
  };
  subscription = {
    topic: 'topic/mqttx',
    qos: 0,
  };

  publish = {
    topic: 'topic/browser',
    qos: 0,
    payload: 'Hello, I am browser.',
  };
  receiveNews = '';

  isConnection = false;
  subscribeSuccess = false;

  createConnection() {
    try {
      this.client?.connect(this.connection as IMqttServiceOptions);
    } catch (error) {
      console.log('mqtt.connect error', error);
    }
    this.client?.onConnect.subscribe(() => {
      this.isConnection = true;
      console.log('Connection succeeded!');
    });
    this.client?.onError.subscribe((error: any) => {
      this.isConnection = false;
      console.log('Connection failed', error);
    });
    this.client?.onMessage.subscribe((packet: any) => {
      this.receiveNews = this.receiveNews.concat(packet.payload.toString());
      console.log(`Received message ${packet.payload.toString()} from topic ${packet.topic}`);
    });
  }

  doSubscribe() {
    const { topic, qos } = this.subscription;
    this.curSubscription = this.client?.observe(topic, { qos }).subscribe((message: IMqttMessage) => {
      this.subscribeSuccess = true;
      console.log('Subscribe to topics res', message.payload.toString());
    });
  }

  doUnSubscribe() {
    this.curSubscription?.unsubscribe();
    this.subscribeSuccess = false;
  }

  doPublish() {
    const { topic, qos, payload } = this.publish;

    console.log(this.publish);
    this.client?.unsafePublish(topic, payload, { qos } as IPublishOptions);
    this.showPublishInfo = `QoS: ${qos},  Payload: '${payload}'`
    this.showTopic = topic;

  }

  destroyConnection() {
    try {
      this.client?.disconnect(true);
      this.isConnection = false;
      console.log('Successfully disconnected!');
    } catch (error: any) {
      console.log('Disconnect failed', error.toString());
    }
  }

}