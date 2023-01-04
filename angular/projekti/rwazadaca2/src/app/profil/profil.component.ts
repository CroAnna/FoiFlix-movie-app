import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisniciService } from '../servisi/korisnici.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  logiraniKorisnik: any = ''; // da ne baca error pri loadanju da je undefined

  profilIme: any;
  profilPrezime: any;
  korime: any;

  constructor(
    private korisniciServis: KorisniciService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.korime = sessionStorage.getItem('prijavljeniKorisnikKorime');
    if (this.korime != null) {
      this.logiraniKorisnik = await this.korisniciServis.dajLogiranog(
        this.korime
      );
    }
  }

  onSubmit(event: any) {
    this.profilIme = event.target.ime.value;
    this.profilPrezime = event.target.prezime.value;
    this.korisniciServis.updateajKorisnika(
      this.korime,
      this.profilIme,
      this.profilPrezime
    );
  }

  odustani() {
    this.router.navigate(['/pocetna']);
  }
}
