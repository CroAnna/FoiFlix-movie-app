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

  prijavi() {
    let odgvor = this.korisniciService.prijaviKorisnika(
      this.inputKorime,
      this.inputLozinka
    );
    console.log('odgovororojfpdsiojifo ' + odgvor);
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

  ucitajSuprotno() {
    this.prikazLogin = !this.prikazLogin;
    this.prikazReg = !this.prikazReg;
  }
}
