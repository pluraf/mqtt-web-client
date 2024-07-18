import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConnectionsComponent } from '../../components/mqttclient/connections/connections.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule, InputTextModule, ConnectionsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  sections = [
    {
      title: 'Section 1',
      inputs: [
        { model: '' },
        { model: '' },
        { model: '' },
        { model: '' }
      ]
    },
    {
      title: 'Section 2',
      inputs: [
        { model: '' },
        { model: '' },
        { model: '' },
        { model: '' }
      ]
    }
  ];

  changeSetting: string = ""
  settingMessage() {
    console.log("hello")
  }

}
