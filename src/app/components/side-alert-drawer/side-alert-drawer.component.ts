import { Component } from '@angular/core';

@Component({
  selector: 'app-side-alert-drawer',
  templateUrl: './side-alert-drawer.component.html',
  styleUrls: ['./side-alert-drawer.component.css'],
})
export class SideAlertDrawerComponent {

  items = [{ id: '1', name: 'Neil', }, { id: '2', name: 'Brooke', }];

}
