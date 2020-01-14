import {Component, OnDestroy, OnInit} from '@angular/core';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  private alive = true;
  statusCards: string;
  constructor() { }

  ngOnDestroy() {
    this.alive = false;
  }

}
