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
  stranica: Number = 1;

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
  }
  strNatrag() {
    //TODO
  }
  async strDalje() {
    this.stranica = 2; //TODO
    this.prikaziFilmove();
  }
  strZadnja() {
    //TODO
  }

  async prikaziFilmove() {
    this.dohvaceniFilmovi = await this.filmoviService.dajTmdbFilmove(
      this.rijeciSearch,
      this.stranica
    );
    sessionStorage.setItem(
      'dohvaceniFilmovi',
      JSON.stringify(this.dohvaceniFilmovi)
    );
  }
}
