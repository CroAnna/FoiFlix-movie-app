import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilmoviService } from '../servisi/filmovi.service';
import { ZanroviService } from '../servisi/zanrovi.service';

@Component({
  selector: 'app-pregled-filmova',
  templateUrl: './pregled-filmova.component.html',
  styleUrls: ['./pregled-filmova.component.scss'],
})
export class PregledFilmovaComponent implements OnInit {
  filmoviOdobreni: any;
  filmoviFiltrirani: any;
  mojiZanrovi: any;

  rijeciSearch: string = '';
  stranica: number = 1;
  //zadnjaStranica: number = 0;
  zadnjaStranica: number = 50;

  filterOdabrani: string = 'Svi';
  zanrOdabraniFilter: any;

  constructor(
    private filmoviService: FilmoviService,
    private zanroviService: ZanroviService
  ) {}

  async ngOnInit() {
    console.log('on init');
    this.filmoviOdobreni = await this.filmoviService.dajMojeFilmove();
    this.mojiZanrovi = await this.zanroviService.dajMojePodatke();
    this.prikaziSve();
    this.filmoviFiltrirani
  }

  async onSearchChange(event: any) {
    console.log(event.target.value);

    this.rijeciSearch = event.target.value;
    //  this.prikaziFilmove();

    if (this.rijeciSearch == '') {
      this.prikaziSve();
    } else if (this.rijeciSearch != '') {
      this.prikaziPoNazivu();
    }
  }

  strPrva() {
    this.stranica = 1;
    // this.prikaziFilmove();
  }
  strNatrag() {
    if (this.stranica > 1) {
      this.stranica = this.stranica - 1;
      // this.prikaziFilmove();
    }
  }
  async strDalje() {
    this.stranica = this.stranica + 1; // mora bit malo number, a ne Number
    // this.prikaziFilmove();
  }
  strZadnja() {
    this.stranica = this.zadnjaStranica;
    // this.prikaziFilmove();
  }
  /*
  get odabraniFilter() {
    return this.filterOdabrani;
  }*/
  /*
  get odabraniZanrFilter() {
    return this.filterOdabrani;
  }*/
  /*
  set odabraniZanrFilter(value: string) {
    // TODO
  }*/
  /*
  set odabraniFilter(value: string) {
    this.filterOdabrani = value;
    console.log('value ' + value);
    if (value == 'Svi') {
      this.prikaziSve();
    } else if (value == 'Naziv') {
      this.prikaziPoNazivu();
    } else if (value == '') {
    }
  }*/

  prikaziPoNazivu() {
    //console.log(this.tekstFiltriranje.toLowerCase());
    this.filmoviFiltrirani = this.filmoviOdobreni.filter((f: any) =>
      f.title.toLowerCase().includes(this.rijeciSearch.toLowerCase())
    );
  }

  prikaziSve() {
    this.filmoviFiltrirani = this.filmoviOdobreni;
  }
}
