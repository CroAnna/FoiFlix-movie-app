import { Component } from '@angular/core';
import { KorisniciService } from '../servisi/korisnici.service';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.scss'],
})
export class NavigacijaComponent {
  constructor(private korisniciService: KorisniciService) {}

  get prijavljenAdmin() {
    return sessionStorage.getItem('prijavljeniKorisnik') == '1';
  }
  get prijavljenKorisnik() {
    return sessionStorage.getItem('prijavljeniKorisnik') == '2';
  }

  odjaviKorisnika() {
    sessionStorage.setItem('prijavljeniKorisnik', ''); //nema prijavljenog
  }
}
