import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { FilmoviI } from '../sucelja/FilmoviI';
import { ZanrComponent } from '../zanr/zanr.component';

@Injectable({
  providedIn: 'root',
})
export class FilmoviService {
  constructor() {}

  async dajMojeFilmove() {
    // let odgovor = await fetch(environment.restServis + 'filmovi');
    let odgovor = await fetch(environment.restServis + 'filmoviOdobreni');
    return JSON.parse(await odgovor.text());
  }

  async dajPrijedloge() {
    // let odgovor = await fetch(environment.restServis + 'filmovi');
    let odgovor = await fetch(environment.restServis + 'filmovi');
    return JSON.parse(await odgovor.text());
  }

  async dohvatiDvaPoZanru(zanr: any) {
    //console.log(`zanr ${zanr.id} ${zanr.name}`);
    console.log(`u dohvatiDvaPoZanru za zanr ${zanr.name} PRIJE`);
    let odgovor = await fetch(
      `${environment.restServis}filmoviPoZanru/` + zanr.id
    );
    console.log(
      `u dohvatiDvaPoZanru za zanr ${zanr.name} odgovor ide sljedeci`
    );

    //  console.log(odgovor.text());
    //return JSON.parse(await odgovor.text());
    return await odgovor.text(); // a na frontendu se parsira onda
  }

  async dajTmdbFilmove(rijec: string, str: Number) {
    let odgovor = await fetch(
      `${environment.restServis}tmdb/filmovi?kljucnaRijec=${rijec}&stranica=${str}`
    );
    return await odgovor.text();
  }

  async dajOdabraniFilm(idFilma: string) {
    // ovo se koristi!
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
    //console.log(`sessjia ${sesija}`);
    let filmovi;
    if (sesija) {
      filmovi = JSON.parse(sesija);
    }

    let odabraniFilm = await fetch(
      `${environment.restServis}tmdb/film/` + idFilma
    );

    let odabraniFilmPodaci = null;
    if (odabraniFilm.status == 200) {
      let podaci = await odabraniFilm.text();
      console.log('ODDABRANI ' + podaci);

      odabraniFilmPodaci = JSON.parse(podaci);
    } else {
      alert('Problem kod preuzimanja podataka:\n' + odabraniFilm.statusText);
    }

    let header = new Headers();
    header.set('Content-Type', 'application/json');
    console.log('id filma ' + idFilma);

    let parametri = {
      method: 'POST',
      body: JSON.stringify(odabraniFilmPodaci),
      headers: header,
    };

    let odgovor = await fetch(`${environment.restServis}filmovi`, parametri);
    if (odgovor.status == 200) {
      let podaci = await odgovor.text();
      console.log('\n\n DODANI FILM ' + JSON.stringify(podaci));
    }
  }
}
