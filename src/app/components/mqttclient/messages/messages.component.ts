import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImportsModule } from '../../../shared/primengImports';


@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule, ImportsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  topic = "";

  filter = 'All';

  setFilter(newFilter: string) {
    this.filter = newFilter;
  }

}
