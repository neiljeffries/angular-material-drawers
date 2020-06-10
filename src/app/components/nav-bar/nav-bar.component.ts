import { Component, OnInit, ViewChild } from '@angular/core';
import { SideAlertDrawerService } from 'src/app/services/side-alert-drawer.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navPosition = 'start';
  constructor(private sideAlertDrawerService: SideAlertDrawerService) {

   }

  ngOnInit() {
    this.sideAlertDrawerService.navPosition.subscribe((position: string) => {
      this.navPosition = position;
    });
  }

  toggleSlide() {
    this.sideAlertDrawerService.sideToggled(1);
  }

  onTogglePosition(position: string) {
    this.sideAlertDrawerService.onTogglePosition(position);
  }

}
