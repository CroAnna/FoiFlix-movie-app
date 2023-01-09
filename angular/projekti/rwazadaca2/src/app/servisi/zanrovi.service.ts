import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { ZanroviI } from '../sucelja/ZanroviI';

@Injectable({
  providedIn: 'root',
})
export class ZanroviService {
  constructor() {}

  async dajMojePodatke() {
    let mojiZanrovi = new Array<ZanroviI>();
    let odgovor = await fetch(`${environment.restServis}zanr`);
    mojiZanrovi = JSON.parse(await odgovor.text()) as Array<ZanroviI>;
    return mojiZanrovi;
  }

  async dajPodatke() {
    let tmdbZanrovi = new Array<ZanroviI>();
    let odgovor = await fetch(`${environment.restServis}tmdb/zanr`);
    tmdbZanrovi = JSON.parse(await odgovor.text()).genres as Array<ZanroviI>;
    return tmdbZanrovi;
  }

  async dajMojePodatkeBrisanje() {
    try {
      let odgovor = await fetch(`${environment.restServis}zanr`);
      if (odgovor.status === 200) {
        const podaci = await odgovor.text();
        this.izbrisiBezFilmova(podaci);
      } else {
        alert(`Problem kod preuzimanja podataka: ${odgovor.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async dodajIzTMDBAuMojuBazu(novi_id: number, novi_naziv: string) {
    let tijelo = {
      id: novi_id,
      name: novi_naziv,
    };

    const zaglavlje = new Headers({ 'Content-Type': 'application/json' });

    const parametri = {
      method: 'POST',
      body: JSON.stringify(tijelo),
      headers: zaglavlje,
    };

    try {
      const odgovor = await fetch(`${environment.restServis}zanr`, parametri);
      const data = await odgovor.text();
      console.log(data);
      if (data == 'false') {
        alert('Ovaj žanr je već u bazi!');
      }
    } catch (error) {
      console.error(error);
    }
  }

  async updateajZanr(id: number, novi_naziv: string) {
    let tijelo = {
      id: id,
      name: novi_naziv,
    };

    let zaglavlje = new Headers();
    zaglavlje.set('Content-Type', 'application/json');

    let parametri = {
      method: 'PUT',
      body: JSON.stringify(tijelo),
      headers: zaglavlje,
    };

    let podatki = await fetch(`${environment.restServis}zanr/:id`, parametri);
    await podatki.text();
  }

  async izbrisiBezFilmova(podaci: any) {
    let zanrovi_parse = JSON.parse(podaci);
    let tijelo = {
      zanrovi: zanrovi_parse,
    };

    let zaglavlje = new Headers();
    zaglavlje.set('Content-Type', 'application/json');

    let parametri = {
      method: 'DELETE',
      body: JSON.stringify(tijelo),
      headers: zaglavlje,
    };

    let podatki = await fetch(`${environment.restServis}zanr`, parametri);
    await podatki.text();
  }
}
