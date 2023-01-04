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
    this.korisniciServis.updateajKorisnika(
      this.korime,
      event.target.ime.value,
      event.target.prezime.value
    );
  }

  odustani() {
    this.router.navigate(['/pocetna']);
  }
}
