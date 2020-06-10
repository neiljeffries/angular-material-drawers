import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'angular-material-drawers';
  navPosition = 'start';
  @ViewChild('sideNav') public sidenav: MatSidenav;

  constructor() {  }

  isToggled(e) {
    this.sidenav.toggle();
  }

  positionToggled(position) {
    this.navPosition = position === 'start' ? 'end' : 'start';
  }

}
