import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetaljiComponent } from './film-detalji/film-detalji.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PregledFilmovaComponent } from './pregled-filmova/pregled-filmova.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { PrijedloziComponent } from './prijedlozi/prijedlozi.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
