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

  async ngOnInit() {
    console.log('on init');
    this.dohvaceniFilmovi = await this.filmoviService.dajTmdbFilmove();
  }

  dodaj() {}

  /*
  async dajFilmove(str: Number) {
    let parametri = { method: 'POST' };
    /* let odgovor = await fetch(
      '/filmoviPretrazivanje?str=' + str + '&filter=' + dajFilter(),
      parametri
    );*/
  /*
    let odgovor = await fetch(
      'http://localhost:9000/api/tmdb/filmovi?kljucnaRijec=love&stranica=1',
      parametri
    );

    if (odgovor.status == 200) {
      let podaci = await odgovor.text();
      podaci = JSON.parse(podaci);
      prikaziFilmove(podaci.results);
      prikaziStranicenje(podaci.page, podaci.total_pages, 'dajFilmove');
    }
  }*/
}
