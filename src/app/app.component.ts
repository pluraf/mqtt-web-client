import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

export class BrokerStat {
  incomingRate: number = 0;
  outgoingRate: number = 0;
  clientsOnline: number = 0;
  clientsOffline: number = 0;
  subscriptions: number = 0;

  incomingPrev: number = 0;
  outgoingPrev: number = 0;
  calcTimestamp: number = 0;

  raw: any = undefined;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


}
