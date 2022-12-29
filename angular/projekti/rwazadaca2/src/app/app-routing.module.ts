import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { PregledFilmovaComponent } from './pregled-filmova/pregled-filmova.component';
import { ZanrComponent } from './zanr/zanr.component';

// pocetna verzija za routing
const routes: Routes = [
  { path: 'zanrovi', component: ZanrComponent },
  { path: 'pregledFilmova', component: PregledFilmovaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
