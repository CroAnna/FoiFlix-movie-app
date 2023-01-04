import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KorisniciService {
  constructor(private router: Router) {}
  // private updateMenu = new Subject<void>();

  async prijaviKorisnika(korime: string, lozinka: string) {
    // lozinka = kodovi.kreirajSHA256(lozinka, 'moja sol');
    let tijelo = {
      korime: korime,
      lozinka: lozinka,
    };

    let zaglavlje = new Headers();
    zaglavlje.set('Content-Type', 'application/json');

    let parametri = {
      method: 'POST',
      body: JSON.stringify(tijelo),
      headers: zaglavlje,
    };
    /*
    let odgovor = await fetch(
      'http://localhost:9000/api/korisnici/' + korime + '/prijava',
      parametri
    );*/

    console.log('prije odg');

    let odgovor = await fetch('http://localhost:9001/prijava', parametri);
    console.log('poslije odg' + odgovor);

    if (odgovor.status == 200) {
      console.log('uspjesna prijava');
      this.router.navigate(['/pocetna']);

      let podaci = await odgovor.text();
      console.log('podaci ' + podaci);
      return JSON.parse(podaci);

      //  return;
      //return JSON.parse(await odgovor.text());
    } else {
      return false;
    }
  }

  async dodajKorisnika(
    korime: string,
    lozinka: string,
    ime: string,
    prezime: string,
    email: string
  ) {
    let tijelo = {
      korime: korime,
      lozinka: lozinka,
      ime: ime,
      prezime: prezime,
      email: email,
    };

    // TODO da sprema ko sol
    // mozda probaj s onim ngFormom

    let header = new Headers();
    header.set('Content-Type', 'application/json');

    let parametri = {
      method: 'POST',
      body: JSON.stringify(tijelo),
      headers: header,
    };

    let podaci = await fetch('http://localhost:9001/registracija', parametri);

    return await podaci.text();
  }
}
