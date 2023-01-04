import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { KorisniciService } from '../servisi/korisnici.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.scss'],
})
export class PrijavaComponent {
  inputLozinka: string = '';
  inputKorime: string = '';
  prikazLogin = false;
  prikazReg = true;

  korime: any;
  lozinka: any;
  ime: any;
  prezime: any;
  email: any;

  constructor(private korisniciService: KorisniciService) {}

  async prijavi() {
    let odgovor = await this.korisniciService.prijaviKorisnika(
      this.inputKorime,
      this.inputLozinka
    );
    console.log('ofg' + odgovor);

    if (odgovor == false) {
      console.log('krivi podaci');

      window.alert('Neispravni podaci!');
    } else {
      sessionStorage.setItem('prijavljeniKorisnik', odgovor.uloga_id);
    }
  }

  registriraj() {
    this.korisniciService.dodajKorisnika(
      this.korime,
      this.lozinka,
      this.ime,
      this.prezime,
      this.email
    );
  }

  // prebacivanje s logina na registraciju i obratno
  ucitajSuprotno() {
    this.prikazLogin = !this.prikazLogin;
    this.prikazReg = !this.prikazReg;
  }
}
