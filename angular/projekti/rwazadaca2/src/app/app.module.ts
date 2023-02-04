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
import { FilmDetaljiComponent } from './film-detalji/film-detalji.component';
import { DokumentacijaComponent } from './dokumentacija/dokumentacija.component';
import { ProfilComponent } from './profil/profil.component';
import { FilmoviPretrazivanjeComponent } from './filmovi-pretrazivanje/filmovi-pretrazivanje.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { UploadSlikeComponent } from './upload-slike/upload-slike.component';
import { ZanrPocetnaComponent } from './zanr-pocetna/zanr-pocetna.component';
import { FilmPocetnaComponent } from './film-pocetna/film-pocetna.component';

@NgModule({
  declarations: [
    AppComponent,
    ZanrComponent,
    NavigacijaComponent,
    PregledFilmovaComponent,
    PrijavaComponent,
    PrijedloziComponent,
    PocetnaComponent,
    FilmDetaljiComponent,
    DokumentacijaComponent,
    ProfilComponent,
    FilmoviPretrazivanjeComponent,
    GalerijaComponent,
    UploadSlikeComponent,
    ZanrPocetnaComponent,
    FilmPocetnaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
