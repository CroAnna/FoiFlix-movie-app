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

  async dajTmdbFilmove(rijec: string, str: Number) {
    let odgovor = await fetch(
      `http://localhost:9000/api/tmdb/filmovi?kljucnaRijec=${rijec}&stranica=${str}`
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

  async dodajUbazu(idFilma: Number) {
    let sesija = sessionStorage.getItem('dohvaceniFilmovi');
    console.log(`sessjia ${sesija}`);
    let filmovi;
    if (sesija) {
      filmovi = JSON.parse(sesija);
    }

    //filmovi = JSON.parse(sessionStorage.getItem('dohvaceniFilmovi'));
    for (let film of filmovi) {
      if (idFilma == film.id) {
        let header = new Headers();
        header.set('Content-Type', 'application/json');
        console.log('id filma ' + idFilma);

        let parametri = {
          method: 'POST',
          body: JSON.stringify(film),
          headers: header,
        };

        let odgovor = await fetch(
          'http://localhost:9000/api/filmovi',
          parametri
        );
        if (odgovor.status == 200) {
          let podaci = await odgovor.text();
          console.log('FILM ' + JSON.stringify(podaci));
          //poruka.innerHTML = 'Film dodan u bazu!';
        } else if (odgovor.status == 401) {
          //  poruka.innerHTML = 'Neautorizirani pristup! Prijavite se!';
        } else {
          //poruka.innerHTML = 'Greška u dodavanju filma!';
        }
        break;
      }
    }
  }
}
