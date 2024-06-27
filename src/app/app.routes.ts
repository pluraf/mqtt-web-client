import { Routes } from '@angular/router';

import { MQTTClientComponent } from "./mqttclient/mqttclient.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'client', component: MQTTClientComponent },
  { path: 'home', component: HomeComponent },
];
