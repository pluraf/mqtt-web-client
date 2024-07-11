import { Component } from '@angular/core';
import { BrokerStat } from "../../app.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'public-mqtt-server-ui';
  brokerStatus = false;
  brokerTCPPort = "";
  brokerTLSPort = "n/a";
  brokerWSPort = "";
  brokerWSSPort = "n/a";
  brokerHost = window.location.hostname;
  brokerStat: BrokerStat = new BrokerStat();

  private statFetcherId: any;

  constructor() { }

  ngOnInit(): void {
    const url = window.location.protocol + "//" + window.location.hostname + ":8351/status.json";
    console.log(url);
    fetch(url).then(response => {
      response.json().then(data => {
        this.parseBrokerStatus(data, true);
      });
    }).catch(error => {
      this.brokerStatus = false;
    });
    this.statFetcherId = setInterval(() => {
      fetch(url).then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.parseBrokerStatus(data);
          });
        } else {
          this.brokerStatus = false;
        }
      }).catch(error => {
        this.brokerStatus = false;
      });
    }, 1000);
  }

  parseBrokerStatus(data: any, init: boolean = false) {
    const obj: any = Object.values(data[0])[0];
    const brokerName = Object.keys(data[0])[0];
    this.brokerStatus = obj["mystatus"][0][brokerName];

    this.brokerStat.clientsOnline = obj["num_online"];
    this.brokerStat.clientsOffline = obj["num_offline"];
    this.brokerStat.subscriptions = obj["num_subscriptions"];
    if (init) {
      this.brokerStat.calcTimestamp = Date.now();
      this.brokerStat.incomingPrev = obj["msg_in"];
      this.brokerStat.outgoingPrev = obj["msg_out"];
    } else {
      let rateTimeLapse = Date.now() - this.brokerStat.calcTimestamp;
      if (rateTimeLapse > 3_000) {
        this.brokerStat.incomingRate =
          (obj["msg_in"] - this.brokerStat.incomingPrev) / (rateTimeLapse / 1000);
        this.brokerStat.incomingRate = Math.max(0, Math.trunc(this.brokerStat.incomingRate));
        this.brokerStat.outgoingRate =
          (obj["msg_out"] - this.brokerStat.outgoingPrev) / (rateTimeLapse / 1000);
        this.brokerStat.outgoingRate = Math.max(0, Math.trunc(this.brokerStat.outgoingRate));

        this.brokerStat.calcTimestamp = Date.now();
        this.brokerStat.incomingPrev = obj["msg_in"];
        this.brokerStat.outgoingPrev = obj["msg_out"];
      }
    }

    obj["listeners"].forEach((value: any) => {
      if (value["type"] == "mqtt") {
        this.brokerTCPPort = value["port"];
      } else if (value["type"] == "mqttws") {
        this.brokerWSPort = value["port"];
      }
    });
  }

}
