import { Injectable } from '@angular/core';
import { FilmoviI } from '../sucelja/FilmoviI';

@Injectable({
  providedIn: 'root',
})
export class FilmoviService {
  constructor() {}

  async dajMojeFilmove() {
    let odgovor = await fetch('http://localhost:9000/api/filmovi');
    return JSON.parse(await odgovor.text());
  }

  async dajTmdbFilmove() {
    let odgovor = await fetch(
      'http://localhost:9000/api/tmdb/filmovi?kljucnaRijec=love&stranica=1'
    );
    return JSON.parse(await odgovor.text()).results;
  }

  async dajOdabraniFilm(idFilma: string) {
    console.log('id filma -----> ' + idFilma);

    let odgovor = await fetch('http://localhost:9000/api/filmovi/' + idFilma);
    if (odgovor.status == 200) {
      let podaci = await odgovor.text();
      console.log('podaci ' + podaci);

      return JSON.parse(podaci);
    } else {
      alert('Problem kod preuzimanja podataka:\n' + odgovor.statusText);
    }
  }

  async odobri(idFilma: Number) {
    let tijelo = {
      id: idFilma,
    };
    let header = new Headers();
    header.set('Content-Type', 'application/json');
    let parametri = {
      method: 'PUT',
      body: JSON.stringify(tijelo),
      headers: header,
    };
    let podatki = await fetch(
      'http://localhost:9000/api/filmovi/:id',
      parametri
    );
    await podatki.text();
  }

  async odbaci(idFilma: Number) {
    let tijelo = {
      id: idFilma,
    };
    let header = new Headers();
    header.set('Content-Type', 'application/json');
    let parametri = {
      method: 'DELETE',
      body: JSON.stringify(tijelo),
      headers: header,
    };
    let podatki = await fetch(
      'http://localhost:9000/api/filmovi/:id',
      parametri
    );
    await podatki.text();
  }
}
