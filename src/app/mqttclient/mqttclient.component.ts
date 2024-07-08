import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ConnectionsComponent } from './connections/connections.component';
import { MessagesComponent } from './messages/messages.component';
import { PublishComponent } from './publish/publish.component';
import { EditConnectionsComponent } from './edit-connections/edit-connections.component';



@Component({
  selector: 'app-mqttclient',
  standalone: true,
  imports: [SplitterModule, ConnectionsComponent, MessagesComponent, PublishComponent, EditConnectionsComponent],
  templateUrl: './mqttclient.component.html',
  styleUrl: './mqttclient.component.css'
})
export class MQTTClientComponent {

}
