import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


interface PublishTab {
  topic: string;
  qos: number;
  retain: boolean;
  message: string;
}

@Component({
  selector: 'app-connections',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, CheckboxModule, SplitterModule, RouterModule],
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


  filter = 'All';


  setFilter(newFilter: string) {
    this.filter = newFilter;
  }
  addConnection() {

    this.router.navigateByUrl('edit');
  }

  addSubscription() {
    this.router.navigateByUrl('edit-sub');
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
