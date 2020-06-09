import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAlertDrawerComponent } from './side-alert-drawer.component';

describe('SideAlertDrawerComponent', () => {
  let component: SideAlertDrawerComponent;
  let fixture: ComponentFixture<SideAlertDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideAlertDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAlertDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
