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
  tekstFiltriranje: string = '';
  mojiZanrovi: any;

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
  }

  get odabraniFilter() {
    return this.filterOdabrani;
  }

  get odabraniZanrFilter() {
    return this.filterOdabrani;
  }

  set odabraniZanrFilter(value: string) {
    // TODO
  }

  set odabraniFilter(value: string) {
    this.filterOdabrani = value;
    console.log('value ' + value);
    if (value == 'Svi') {
      this.prikaziSve();
    } else if (value == 'Naziv') {
      this.prikaziPoNazivu();
    } else if (value == '') {
    }
  }

  prikaziPoNazivu() {
    //console.log(this.tekstFiltriranje.toLowerCase());
    this.filmoviFiltrirani = this.filmoviOdobreni.filter((f: any) =>
      f.title.toLowerCase().includes(this.tekstFiltriranje.toLowerCase())
    );
  }

  prikaziSve() {
    this.filmoviFiltrirani = this.filmoviOdobreni;
  }
}
