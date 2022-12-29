import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { ZanrComponent } from './zanr/zanr.component';

// pocetna verzija za routing
const routes: Routes = [
  { path: 'first-component', component: ZanrComponent },
  { path: 'second-component', component: NavigacijaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
