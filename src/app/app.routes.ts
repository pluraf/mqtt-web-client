import { Routes } from '@angular/router';
import { MQTTClientComponent } from "./components/mqttclient/mqttclient.component";
import { HomeComponent } from "./components/home/home.component";
import { EditConnectionsComponent } from './components/mqttclient/edit-connections/edit-connections.component';
import { EditSubscriptionComponent } from './components/mqttclient/edit-subscription/edit-subscription.component';
import { AddPublisherComponent } from './components/mqttclient/add-publisher/add-publisher.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'client', component: MQTTClientComponent },
  { path: 'home', component: HomeComponent },
  { path: 'edit', component: EditConnectionsComponent },
  { path: 'edit-sub', component: EditSubscriptionComponent },
  { path: 'edit-publisher', component: AddPublisherComponent },

];
