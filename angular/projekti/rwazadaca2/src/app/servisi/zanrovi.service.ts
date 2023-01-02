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
}
