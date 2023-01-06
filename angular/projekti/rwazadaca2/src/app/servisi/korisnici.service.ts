import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class KorisniciService {
  constructor(private router: Router) {}

  async dajLogiranog(korime: string) {
    let odgovor = await fetch(`${environment.restServis}korisnici/` + korime);
    if (odgovor.status == 200) {
      let podaci = await odgovor.text();
      console.log(podaci);
      return JSON.parse(podaci);
      //prikaziKorisnikovePodatke(podaci);
    } else {
      return null;
      // alert('Problem kod preuzimanja podataka:\n' + odgovor.statusText);
    }
  }

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

    let odgovor = await fetch(`${environment.appServis}prijava`, parametri);
    if (odgovor.status == 200) {
      console.log('uspjesna prijava');
      this.router.navigate(['/pocetna']);

      let podaci = await odgovor.text();
      console.log('podaci ' + podaci);
      return JSON.parse(podaci);
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

    let header = new Headers();
    header.set('Content-Type', 'application/json');

    let parametri = {
      method: 'POST',
      body: JSON.stringify(tijelo),
      headers: header,
    };

    let podaci = await fetch(`${environment.appServis}registracija`, parametri);

    return await podaci.text();
  }

  async updateajKorisnika(
    korime: string,
    novo_ime: string,
    novo_prezime: string
  ) {
    let tijelo = {
      korime: korime,
      ime: novo_ime,
      prezime: novo_prezime,
    };

    let header = new Headers();
    header.set('Content-Type', 'application/json');

    let parametri = {
      method: 'PUT',
      body: JSON.stringify(tijelo),
      headers: header,
    };
    let podatki = await fetch(
      `${environment.restServis}korisnici/` + korime,
      parametri
    );
    await podatki.text();
  }
}
