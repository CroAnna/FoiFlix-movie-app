import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilmoviService } from '../servisi/filmovi.service';

@Component({
  selector: 'app-pregled-filmova',
  templateUrl: './pregled-filmova.component.html',
  styleUrls: ['./pregled-filmova.component.scss'],
})
export class PregledFilmovaComponent implements OnInit {
  filmoviOdobreni: any;
  //filter = { odobreno: 1 };
  filmoviFiltrirani: any;
  filterOdabrani: string = 'Svi';
  tekstFiltriranje: string = '';

  constructor(private filmoviService: FilmoviService) {}

  get odabraniFilter() {
    return this.filterOdabrani;
  }

  set odabraniFilter(value: string) {
    // zove se svaki put kad se promijeni
    this.filterOdabrani = value;
    console.log('value ' + value);
    if (value == 'Svi') {
      this.prikaziSve();
    } else if (value == 'Naziv') {
      this.prikaziPoNazivu();
    } else if (value == '') {
    }
    // promjena polja prikaza
  }

  prikaziPoNazivu() {
    console.log(this.tekstFiltriranje.toLowerCase());

    this.filmoviFiltrirani = this.filmoviOdobreni.filter((f: any) =>
      f.title.toLowerCase().includes(this.tekstFiltriranje.toLowerCase())
    );
  }

  prikaziSve() {
    this.filmoviFiltrirani = this.filmoviOdobreni;
  }

  async ngOnInit() {
    console.log('on init');
    this.filmoviOdobreni = await this.filmoviService.dajMojeFilmove();
    this.prikaziSve();
  }
}
