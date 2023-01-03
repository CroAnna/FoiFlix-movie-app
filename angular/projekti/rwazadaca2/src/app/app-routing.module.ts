import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigacijaComponent } from './navigacija/navigacija.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
