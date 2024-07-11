import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SplitterModule } from 'primeng/splitter';
import { MessagesComponent } from '../messages/messages.component';
import { PublishComponent } from '../publish/publish.component';


@Component({
  selector: 'app-add-publisher',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, CheckboxModule, SplitterModule, InputTextModule, MessagesComponent, PublishComponent],
  templateUrl: './add-publisher.component.html',
  styleUrl: './add-publisher.component.css'
})
export class AddPublisherComponent {
  connections = [
    { name: 'Connection 1', subscriptions: [{ name: 'Subscription 2', enabled: false }, { name: 'Subscription 1', enabled: false }] },
    { name: 'Connection 2', subscriptions: [{ name: 'Subscription 2', enabled: false }, { name: 'Subscription 1', enabled: false }] }
  ];
  addSubscription() { }
  addConnection() { }
}
