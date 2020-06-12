import { Component } from '@angular/core';

@Component({
  selector: 'app-side-alert-drawer',
  templateUrl: './side-alert-drawer.component.html',
  styleUrls: ['./side-alert-drawer.component.css'],
})
export class SideAlertDrawerComponent {

  items = [
    { id: '1', type: 'Late Load', detail: 'some more details!' },
    { id: '2', type: 'Arrived Not Blocked', detail: 'some more details!' },
    { id: '3', type: 'Delay', detail: 'some more details!' },
    { id: '4', type: 'Tail Swap', detail: 'some more details!' }
  ];

}
