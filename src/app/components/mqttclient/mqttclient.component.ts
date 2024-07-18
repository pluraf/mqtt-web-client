import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitterModule } from 'primeng/splitter';
import { ConnectionsComponent } from './connections/connections.component';
import { MessagesComponent } from './messages/messages.component';
import { PublishComponent } from './publish/publish.component';
import { SettingsComponent } from '../../shared/settings/settings.component';

@Component({
  selector: 'app-mqttclient',
  standalone: true,
  imports: [SplitterModule, ConnectionsComponent, MessagesComponent, PublishComponent, SettingsComponent, CommonModule],
  templateUrl: './mqttclient.component.html',
  styleUrl: './mqttclient.component.css',
})
export class MQTTClientComponent {
  changeComponent: boolean = false;

  onComponentChange(event: boolean) {
    this.changeComponent = event;
  }
}
