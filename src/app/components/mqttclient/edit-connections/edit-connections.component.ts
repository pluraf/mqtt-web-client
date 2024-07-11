import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-edit-connections',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, CheckboxModule, SplitterModule, InputTextModule],
  templateUrl: './edit-connections.component.html',
  styleUrl: './edit-connections.component.css'
})
export class EditConnectionsComponent {
  connections = [
    { name: 'Connection 1', subscriptions: [{ name: 'Subscription 2', enabled: false }, { name: 'Subscription 1', enabled: false }] },
    { name: 'Connection 2', subscriptions: [{ name: 'Subscription 2', enabled: false }, { name: 'Subscription 1', enabled: false }] }
  ];

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
  topic = ""
  addConnection() { }
  addSubscription() { }
}
