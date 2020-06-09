import { Component } from '@angular/core';
import { SideAlertDrawerService } from './services/side-alert-drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items = [{
    id: '1',
    name: 'Neil'
  }, {
    id: '2',
    name: 'Brooke'
  }];

  navPosition = 'start';

  constructor(private sideAlertDrawerService: SideAlertDrawerService) {

    this.sideAlertDrawerService.navPosition.subscribe((position: string) => {
      this.navPosition = position;
    });
  }
  title = 'angular-material-drawers';





  onTogglePosition(position: string) {
    this.sideAlertDrawerService.onTogglePosition(position);
   // this.navPosition = position === 'start' ? 'end' : 'start';

  }
}
