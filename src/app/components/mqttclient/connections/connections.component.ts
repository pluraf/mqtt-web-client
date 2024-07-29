import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingsComponent } from '../../../shared/settings/settings.component';
import { ImportsModule } from '../../../shared/primengImports';


@Component({
  selector: 'app-connections',
  standalone: true,
  imports: [CommonModule, FormsModule, ImportsModule, RouterModule, SettingsComponent],
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
    this.changeSetting.emit("Connection 1");
  }

  newSubscription() {
    this.hideButtons = true;
    this.changeComponent.emit(true);
    this.changeSetting.emit("Subscription 1")
  }

  deleteConnection(connection: any) {
  }

  toggleSubscription(subscription: any) {
    subscription.enabled = !subscription.enabled;
  }
  editConnection() { }
  editSubscription(subscription: any) {
  }

  deleteSubscription(subscription: any) {
  }
}
