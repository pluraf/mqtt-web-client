import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionsComponent } from './connections/connections.component';
import { MessagesComponent } from './messages/messages.component';
import { PublishComponent } from './publish/publish.component';
import { SettingsComponent } from '../../shared/settings/settings.component';
import { ImportsModule } from '../../shared/primengImports';

@Component({
  selector: 'app-mqttclient',
  standalone: true,
  imports: [ImportsModule, ConnectionsComponent, MessagesComponent, PublishComponent, SettingsComponent, CommonModule],
  templateUrl: './mqttclient.component.html',
  styleUrl: './mqttclient.component.css',
})
export class MQTTClientComponent {
  changeComponent: boolean = false;
  settingText: string = '';
  onComponentChange(event: boolean) {
    this.changeComponent = event;
  }
  onSettingChange(setting: string) {
    this.settingText = setting;
  }
}
