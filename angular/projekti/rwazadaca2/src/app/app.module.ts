import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ZanrComponent } from './zanr/zanr.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { PregledFilmovaComponent } from './pregled-filmova/pregled-filmova.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { PrijedloziComponent } from './prijedlozi/prijedlozi.component';
import { PocetnaComponent } from './pocetna/pocetna.component';

@NgModule({
  declarations: [
    AppComponent,
    ZanrComponent,
    NavigacijaComponent,
    PregledFilmovaComponent,
    PrijavaComponent,
    PrijedloziComponent,
    PocetnaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
