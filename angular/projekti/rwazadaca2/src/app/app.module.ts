import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ZanrComponent } from './zanr/zanr.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { PregledFilmovaComponent } from './pregled-filmova/pregled-filmova.component';

@NgModule({
  declarations: [AppComponent, ZanrComponent, NavigacijaComponent, PregledFilmovaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
