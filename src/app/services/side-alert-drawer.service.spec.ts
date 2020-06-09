import { TestBed } from '@angular/core/testing';

import { SideAlertDrawerService } from './side-alert-drawer.service';

describe('SideAlertDrawerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideAlertDrawerService = TestBed.get(SideAlertDrawerService);
    expect(service).toBeTruthy();
  });
});
