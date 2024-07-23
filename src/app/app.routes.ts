import { Routes } from '@angular/router';
import { MQTTClientComponent } from "./components/mqttclient/mqttclient.component";
import { HomeComponent } from "./components/home/home.component";
import { SettingsComponent } from './shared/settings/settings.component';



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'client', component: MQTTClientComponent },
  { path: 'home', component: HomeComponent },
];
