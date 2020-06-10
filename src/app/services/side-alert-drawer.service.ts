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

  private sideToggleSubject = new BehaviorSubject<number>(1);
  sideToggle = this.sideToggleSubject.asObservable();

  onTogglePosition(position: string) {
    this.navPositionSubject.next(position === 'start' ? 'end' : 'start');
  }

  sideToggled(x) {
    this.sideToggleSubject.next(x === 1 ? 0 : 1);
  }



}
