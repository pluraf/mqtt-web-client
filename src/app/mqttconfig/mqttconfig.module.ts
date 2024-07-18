import { NgModule } from '@angular/core';
import { IMqttServiceOptions } from 'ngx-mqtt';
import { MqttModule } from 'ngx-mqtt';


const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'broker.emqx.io',
  port: 8083,
  protocol: 'ws',
  path: '',
};

@NgModule({
  imports: [MqttModule.forRoot(MQTT_SERVICE_OPTIONS), MqttModule],

})
export class MqttConfigModule { }
