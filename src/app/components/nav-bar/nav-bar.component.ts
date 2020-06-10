import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  position = 'start';
  @Output() toggleOpenCloseEmit: EventEmitter<any> = new EventEmitter();
  @Output() togglePositionEmit: EventEmitter<any> = new EventEmitter();

  onToggleOpenClose() {
    this.toggleOpenCloseEmit.emit(null);
  }

  onTogglePosition(position: string) {
    this.position = position === 'start' ? 'end' : 'start';
    this.togglePositionEmit.emit(position);
  }

}
