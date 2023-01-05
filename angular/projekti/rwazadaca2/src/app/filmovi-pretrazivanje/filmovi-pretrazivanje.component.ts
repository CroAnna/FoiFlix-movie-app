import { Component, OnInit } from '@angular/core';
import { FilmoviService } from '../servisi/filmovi.service';

@Component({
  selector: 'app-filmovi-pretrazivanje',
  templateUrl: './filmovi-pretrazivanje.component.html',
  styleUrls: ['./filmovi-pretrazivanje.component.scss'],
})
export class FilmoviPretrazivanjeComponent implements OnInit {
  constructor(private filmoviService: FilmoviService) {}
  dohvaceniFilmovi: any;
  rijeciSearch: string = '';
  stranica: number = 1;
  zadnjaStranica: number = 0;

  async onSearchChange(event: any) {
    console.log(event.target.value);

    this.rijeciSearch = event.target.value;
    this.prikaziFilmove();
  }

  async ngOnInit() {
    console.log('on init');
    this.prikaziFilmove();
  }

  get odabraniFilter() {
    return this.rijeciSearch;
  }

  dodaj(idFilma: Number) {
    this.filmoviService.dodajUbazu(idFilma);
  }

  strPrva() {
    this.stranica = 1;
    this.prikaziFilmove();
  }
  strNatrag() {
    if (this.stranica > 1) {
      this.stranica = this.stranica - 1;
      this.prikaziFilmove();
    }
  }
  async strDalje() {
    this.stranica = this.stranica + 1; // mora bit malo number, a ne Number
    this.prikaziFilmove();
  }
  strZadnja() {
    this.stranica = this.zadnjaStranica;
    this.prikaziFilmove();
  }

  async prikaziFilmove() {
    this.dohvaceniFilmovi = JSON.parse(
      await this.filmoviService.dajTmdbFilmove(this.rijeciSearch, this.stranica)
    ).results;
    sessionStorage.setItem(
      'dohvaceniFilmovi',
      JSON.stringify(this.dohvaceniFilmovi)
    );

    this.zadnjaStranica = JSON.parse(
      await this.filmoviService.dajTmdbFilmove(this.rijeciSearch, this.stranica)
    ).total_pages;
  }
}
