import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { FilmoviI } from '../sucelja/FilmoviI';

@Injectable({
  providedIn: 'root',
})
export class FilmoviService {
  constructor() {}

  async dajMojeFilmove() {
    let odgovor = await fetch(environment.restServis + 'filmovi');
    return JSON.parse(await odgovor.text());
  }

  async dajTmdbFilmove(rijec: string, str: Number) {
    let odgovor = await fetch(
      `${environment.restServis}tmdb/filmovi?kljucnaRijec=${rijec}&stranica=${str}`
    );
    return await odgovor.text();
  }

  async dajOdabraniFilm(idFilma: string) {
    let odgovor = await fetch(`${environment.restServis}filmovi/` + idFilma);
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
      `${environment.restServis}filmovi/:id`,
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
      `${environment.restServis}filmovi/:id`,
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

    for (let film of filmovi) {
      if (idFilma == film.id) {
        // TODO slozi tu da se dohvaca film iz
        // https://api.themoviedb.org/3/movie/718789?api_key=d1a195f8c2246da2ab419d50494d4da8
        // i onda se ti podaci spreme u film koji se spremi u bazu onda

        // imas u klijentTMDB dohvatiFilm(id), mozda se more s tim nekaj idk

        let header = new Headers();
        header.set('Content-Type', 'application/json');
        console.log('id filma ' + idFilma);

        let parametri = {
          method: 'POST',
          body: JSON.stringify(film),
          headers: header,
        };

        let odgovor = await fetch(
          `${environment.restServis}filmovi`,
          parametri
        );
        if (odgovor.status == 200) {
          let podaci = await odgovor.text();
          console.log('FILM ' + JSON.stringify(podaci));
        }
        break;
      }
    }
  }
}
