import { Injectable } from '@angular/core';
import { FilmoviI } from '../sucelja/FilmoviI';

@Injectable({
  providedIn: 'root',
})
export class FilmoviService {
  constructor() {}

  async dajMojeFilmove() {
    console.log(' u daj moje');
    /*
    let mojiFilmovi = new Array<FilmoviI>();
    let odgovor = await fetch('http://localhost:9000/api/filmovi');
    mojiFilmovi = JSON.parse(await odgovor.text());
    //as Array<FilmoviI>;
    console.log('MOJI ' + mojiFilmovi);*/

    let odgovor = await fetch('http://localhost:9000/api/filmovi');
    let podaci = await odgovor.text();
    let mojiFilmovi = JSON.parse(podaci);
    return mojiFilmovi;
  }
}
