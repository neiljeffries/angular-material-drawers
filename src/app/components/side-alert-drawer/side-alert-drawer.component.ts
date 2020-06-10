import { Component, OnInit } from '@angular/core';
import { SideAlertDrawerService } from 'src/app/services/side-alert-drawer.service';

@Component({
  selector: 'app-side-alert-drawer',
  templateUrl: './side-alert-drawer.component.html',
  styleUrls: ['./side-alert-drawer.component.css'],
})
export class SideAlertDrawerComponent implements OnInit {
  constructor() {}
  items = [
    {
      id: '1',
      name: 'Neil',
    },
    {
      id: '2',
      name: 'Brooke',
    },
  ];
  ngOnInit() {}
}
