import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-alert-drawer',
  templateUrl: './side-alert-drawer.component.html',
  styleUrls: ['./side-alert-drawer.component.css'],
})
export class SideAlertDrawerComponent {

  @Output() closeEmit = new EventEmitter<Event>();

  items = [
    { id: '1', type: 'Late Load', detail: 'some more details!' },
    { id: '2', type: 'Arrived Not Blocked', detail: 'some more details! Flight UPS2337 SDF-DEN is so damn late!' },
    { id: '3', type: 'Delay', detail: 'some more details!' },
    { id: '4', type: 'Tail Swap', detail: 'some more details!' },
    { id: '5', type: 'Late Load', detail: 'some more details!' },
    { id: '6', type: 'Arrived Not Blocked', detail: 'some more details! Flight UPS2337 SDF-DEN is so damn late!' },
    { id: '7', type: 'Delay', detail: 'some more details!' },
    { id: '8', type: 'Tail Swap', detail: 'some more details!' }
  ];

  onClose(event: Event) {
    this.closeEmit.emit(event);
  }

}
