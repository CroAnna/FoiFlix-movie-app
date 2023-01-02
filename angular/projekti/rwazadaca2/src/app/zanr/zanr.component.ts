import { Component } from '@angular/core';
import { ZanroviService } from '../servisi/zanrovi.service';

@Component({
  selector: 'app-zanr',
  templateUrl: './zanr.component.html',
  styleUrls: ['./zanr.component.scss'],
})
export class ZanrComponent {
  zanroviMoji: any;
  zanroviTMDB: any;
  odabraniRadioName: string = '';
  odabraniRadioId: number = 0; // neki defaultni broj

  constructor(private zanroviService: ZanroviService) {}

  async prikaziMojeZanrove() {
    this.zanroviMoji = await this.zanroviService.dajMojePodatke();
  }

  async prikaziTMDBZanrove() {
    this.zanroviTMDB = await this.zanroviService.dajPodatke();
  }

  onChange(event: any, id: number) {
    // koji je trenutno odabran
    this.odabraniRadioName = event.target.value;
    this.odabraniRadioId = id;
  }

  dodajTMDBPodatke() {
    console.log('kliknut sam');
    this.zanroviService.dodajIzTMDBAuMojuBazu(
      this.odabraniRadioId,
      this.odabraniRadioName
    );
  }

  async dajMojePodatkeBrisanje() {
    try {
      let odgovor = await fetch('http://localhost:9000/api/zanr');
      if (odgovor.status === 200) {
        const podaci = await odgovor.text();
        this.zanroviService.izbrisiBezFilmova(podaci);
      } else {
        alert(`Problem kod preuzimanja podataka: ${odgovor.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
