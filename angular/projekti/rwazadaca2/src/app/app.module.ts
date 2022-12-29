import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ZanrComponent } from './zanr/zanr.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';

// pocetak navigacije za routing
const routes: Routes = [{ path: 'zanrovi', component: ZanrComponent }];

@NgModule({
  declarations: [AppComponent, ZanrComponent, NavigacijaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
