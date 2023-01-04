import { Component } from '@angular/core';
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
    if (odgovor == false) {
      window.alert('Neispravni podaci!');
    } else {
      sessionStorage.setItem('prijavljeniKorisnik', odgovor.uloga_id);
      sessionStorage.setItem('prijavljeniKorisnikKorime', odgovor.korime);
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
