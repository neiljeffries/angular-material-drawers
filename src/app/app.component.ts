import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'angular-material-drawers';
  position = 'start';
  @ViewChild('sideDrawer') public sideDrawer: MatSidenav;

  toggleOpenClose(e) {
    this.sideDrawer.toggle();
  }

  togglePosition(position) {
    this.position = position === 'start' ? 'end' : 'start';
  }

}
