import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SettingsComponent } from '../../../shared/settings/settings.component';


interface PublishTab {
  topic: string;
  qos: number;
  retain: boolean;
  message: string;
}

@Component({
  selector: 'app-connections',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, CheckboxModule, SplitterModule, RouterModule, SettingsComponent],
  templateUrl: './connections.component.html',
  styleUrl: './connections.component.css'
})
export class ConnectionsComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  connections = [
    { name: 'Connection 1', subscriptions: [{ name: 'Subscription 2', enabled: false }, { name: 'Subscription 1', enabled: false }] },
    { name: 'Connection 2', subscriptions: [{ name: 'Subscription 2', enabled: false }, { name: 'Subscription 1', enabled: false }] }
  ];
  hideButtons: boolean = false;

  @Output() changeComponent = new EventEmitter<boolean>();
  @Output() changeSetting = new EventEmitter<string>();
  newConnection() {
    this.hideButtons = true;
    this.changeComponent.emit(true);
    this.changeSetting.emit("Connection 1 Settings");
  }

  newSubscription() {
    this.hideButtons = true;
    this.changeComponent.emit(true);
    /* const subscription = this.connections[connectionIndex].subscriptions[subscriptionIndex];
    this.changeSetting.emit(`${subscription.name} Settings`); */
    this.changeSetting.emit("Subscription 1 Settings")
  }

  deleteConnection(connection: any) {
  }

  toggleSubscription(subscription: any) {
    subscription.enabled = !subscription.enabled;
  }

  editSubscription(subscription: any) {
  }

  deleteSubscription(subscription: any) {
  }
}
