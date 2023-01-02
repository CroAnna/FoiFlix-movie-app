import { Injectable } from '@angular/core';
import { ZanroviI } from '../sucelja/ZanroviI';

@Injectable({
  providedIn: 'root',
})
export class ZanroviService {
  constructor() {}

  async dajMojePodatke() {
    let mojiZanrovi = new Array<ZanroviI>();
    let odgovor = await fetch('http://localhost:9000/api/zanr'); // OVO SE CITA IZ ENVIRONMENT VARIJABLI TODO
    mojiZanrovi = JSON.parse(await odgovor.text()) as Array<ZanroviI>;
    return mojiZanrovi;
  }

  async dajPodatke() {
    let tmdbZanrovi = new Array<ZanroviI>();
    let odgovor = await fetch('http://localhost:9000/api/tmdb/zanr');
    tmdbZanrovi = JSON.parse(await odgovor.text()).genres as Array<ZanroviI>;
    return tmdbZanrovi;
  }

  async dodajIzTMDBAuMojuBazu(novi_id: number, novi_naziv: string) {
    console.log(novi_id + ' ' + novi_naziv);
    let tijelo = {
      id: novi_id,
      name: novi_naziv,
    };

    const headers = new Headers({ 'Content-Type': 'application/json' });

    const params = {
      method: 'POST',
      body: JSON.stringify(tijelo),
      headers: headers,
    };

    try {
      const odgovor = await fetch('http://localhost:9000/api/zanr', params);
      const data = await odgovor.text();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async izbrisiBezFilmova(podaci: any) {
    let zanrovi_parse = JSON.parse(podaci);
    let tijelo = {
      zanrovi: zanrovi_parse,
    };

    let header = new Headers();
    header.set('Content-Type', 'application/json');

    let parametri = {
      method: 'DELETE',
      body: JSON.stringify(tijelo),
      headers: header,
    };

    let podatki = await fetch('http://localhost:9000/api/zanr', parametri);
    await podatki.text();
  }
}
