import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideAlertDrawerService } from './services/side-alert-drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

  title = 'angular-material-drawers';

  navPosition = 'start';

  @ViewChild('sideNav') public sidenav: MatSidenav;

  constructor(private sideAlertDrawerService: SideAlertDrawerService) {  }

  ngAfterViewInit() {
    this.sideAlertDrawerService.sideToggle.subscribe((x: number) => {
      this.sidenav.toggle();
    });
    this.sideAlertDrawerService.navPosition.subscribe((position: string) => {
      this.navPosition = position;
    });
  }

}
