import { Component, OnInit } from '@angular/core';
import { KorisniciService } from '../servisi/korisnici.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  logiraniKorisnik: any = ''; // da ne baca error pri loadanju da je undefined

  constructor(private korisniciServis: KorisniciService) {}

  async ngOnInit() {
    let korime = sessionStorage.getItem('prijavljeniKorisnikKorime');
    if (korime != null) {
      this.logiraniKorisnik = await this.korisniciServis.dajLogiranog(korime);
    }
  }
}
