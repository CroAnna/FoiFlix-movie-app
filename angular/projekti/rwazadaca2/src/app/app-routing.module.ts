import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DokumentacijaComponent } from './dokumentacija/dokumentacija.component';
import { FilmDetaljiComponent } from './film-detalji/film-detalji.component';
import { FilmoviPretrazivanjeComponent } from './filmovi-pretrazivanje/filmovi-pretrazivanje.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PregledFilmovaComponent } from './pregled-filmova/pregled-filmova.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { PrijedloziComponent } from './prijedlozi/prijedlozi.component';
import { ProfilComponent } from './profil/profil.component';
import { UploadSlikeComponent } from './upload-slike/upload-slike.component';

import { ZanrComponent } from './zanr/zanr.component';

// pocetna verzija za routing
const routes: Routes = [
  { path: '', redirectTo: '/pocetna', pathMatch: 'full' }, // provjeri
  { path: 'zanrovi', component: ZanrComponent },
  { path: 'prijava', component: PrijavaComponent },
  { path: 'pregledFilmova', component: PregledFilmovaComponent },
  { path: 'prijedloziFilmova', component: PrijedloziComponent },
  { path: 'pocetna', component: PocetnaComponent },
  { path: 'pregledFilmova/film/:id', component: FilmDetaljiComponent },
  { path: 'pregledFilmova/galerija/:id', component: GalerijaComponent },
  { path: 'dokumentacija', component: DokumentacijaComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'pretrazivanje', component: FilmoviPretrazivanjeComponent },
  { path: 'upload', component: UploadSlikeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
