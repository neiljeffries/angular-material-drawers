import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideAlertDrawerComponent } from './components/side-alert-drawer/side-alert-drawer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';





@NgModule({
  declarations: [
    AppComponent,
    SideAlertDrawerComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SideAlertDrawerComponent]
})
export class AppModule { }
