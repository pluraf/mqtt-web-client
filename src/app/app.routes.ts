import { Routes } from '@angular/router';

import { MQTTClientComponent } from "./mqttclient/mqttclient.component";
import { HomeComponent } from "./home/home.component";
import { EditConnectionsComponent } from './mqttclient/edit-connections/edit-connections.component';
import { EditSubscriptionComponent } from './mqttclient/edit-subscription/edit-subscription.component';
import { AddPublisherComponent } from './mqttclient/add-publisher/add-publisher.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'client', component: MQTTClientComponent },
  { path: 'home', component: HomeComponent },
  { path: 'edit', component: EditConnectionsComponent },
  { path: 'edit-sub', component: EditSubscriptionComponent },
  { path: 'edit-publisher', component: AddPublisherComponent },
];
