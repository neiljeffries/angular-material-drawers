import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideAlertDrawer } from '../classes/side-alert-drawer';

@Injectable({
  providedIn: 'root'
})


export class SideAlertDrawerService {

  constructor() { }

  private navPositionSubject = new BehaviorSubject<string>('start');
  navPosition = this.navPositionSubject.asObservable();

  onTogglePosition(position: string) {
    this.navPositionSubject.next(position === 'start' ? 'end' : 'start');
  }

}
