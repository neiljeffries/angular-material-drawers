import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideAlertDrawerComponent } from './components/side-alert-drawer/side-alert-drawer.component';





@NgModule({
  declarations: [
    AppComponent,
    SideAlertDrawerComponent
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
