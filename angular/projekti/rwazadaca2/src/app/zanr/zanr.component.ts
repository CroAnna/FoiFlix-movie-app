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
    this.dodajIzTMDBAuMojuBazu(this.odabraniRadioId, this.odabraniRadioName);
  }

  async dodajIzTMDBAuMojuBazu(novi_id: number, novi_naziv: string) {
    console.log(novi_id + ' ' + novi_naziv);
    let tijelo = {
      id: novi_id,
      name: novi_naziv,
    };

    const headers = new Headers({ 'Content-Type': 'application/json' });

    const params = {
      method: 'POST',
      body: JSON.stringify(tijelo),
      headers: headers,
    };

    try {
      const odgovor = await fetch('http://localhost:9000/api/zanr', params);
      const data = await odgovor.text();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
