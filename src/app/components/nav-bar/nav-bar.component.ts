import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SideAlertDrawerService } from 'src/app/services/side-alert-drawer.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navPosition = 'start';
  constructor() {

   }
   @Output() toggle: EventEmitter<any> = new EventEmitter();
   @Output() positionToggled: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  toggleSlide() {
    this.toggle.emit(null);
  }

  onTogglePosition(position: string) {
  this.navPosition = position === 'start' ? 'end' : 'start';
  this.positionToggled.emit(position);
  }

}
