import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZanroviService {
  constructor() {}

  async dajMojePodatke() {
    console.log('u daj moje podatke');
    let zanrovi = new Array<{ id: Number; name: String }>();
    let odgovor = await fetch('http://localhost:9000/api/zanr');
    zanrovi = JSON.parse(await odgovor.text()) as Array<{
      id: Number;
      name: String;
    }>;

    console.log(zanrovi);
    if (odgovor.status == 200) {
    } else {
      console.error();

      alert('Problem kod preuzimanja podataka:\n' + odgovor.statusText);
    }
    return zanrovi;
  }
  private zanroviMoji: any = JSON.stringify(this.dajMojePodatke());
}
