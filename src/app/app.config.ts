import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MQTT_SERVICE_OPTIONS, MqttModule } from 'ngx-mqtt';
import { provideAnimations } from '@angular/platform-browser/animations';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), importProvidersFrom(MqttModule.forRoot(MQTT_SERVICE_OPTIONS)), provideAnimations()]
};
