import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HowitworksComponent } from './info/howitworks/howitworks.component';
import { LatestdealsComponent } from './info/latestdeals/latestdeals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowitworksComponent,
    LatestdealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
