import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SideAlertDrawerService {

  constructor() { }

  // private navPositionSubject = new BehaviorSubject<string>('start');
  // navPosition = this.navPositionSubject.asObservable();

  // onTogglePosition(position: string) {
  //   this.navPositionSubject.next(position === 'start' ? 'end' : 'start');
  // }

}
