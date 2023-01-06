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
  odabraniRadioNameTmdb: string = '';
  odabraniRadioIdTmdb: number = 0; // neki defaultni broj
  odabraniRadioNameMoj: string = '';
  odabraniRadioIdMoj: number = 0; // neki defaultni broj
  noviNaziv: any; // two way binding
  constructor(private zanroviService: ZanroviService) {}

  async prikaziMojeZanrove() {
    this.zanroviMoji = await this.zanroviService.dajMojePodatke();
  }

  async prikaziTMDBZanrove() {
    this.zanroviTMDB = await this.zanroviService.dajPodatke();
  }

  onChangeOdabraniRadioTmdb(event: any, id: number) {
    // koji je trenutno odabran
    this.odabraniRadioNameTmdb = event.target.value;
    this.odabraniRadioIdTmdb = id;
  }

  onChangeOdabraniRadioMoj(event: any, id: number) {
    this.odabraniRadioNameMoj = event.target.value;
    this.odabraniRadioIdMoj = id;
  }

  async dodajTMDBPodatke() {
    if (this.odabraniRadioIdTmdb != 0) {
      await this.zanroviService.dodajIzTMDBAuMojuBazu(
        this.odabraniRadioIdTmdb,
        this.odabraniRadioNameTmdb
      );
      this.prikaziMojeZanrove();
    } else {
      alert('Nije odabran ni jedan žanr!');
    }
  }

  async dodajSveTMDBPodatke() {
    await this.prikaziTMDBZanrove();
    console.log('zanrovi tmdb ' + this.zanroviTMDB);

    this.zanroviTMDB.forEach(async (zanr: any) => {
      console.log(zanr.id + zanr.name);
      await this.zanroviService.dodajIzTMDBAuMojuBazu(zanr.id, zanr.name);
    });
    await this.prikaziMojeZanrove();
  }

  async promijeniNaziv() {
    await this.zanroviService.updateajZanr(
      this.odabraniRadioIdMoj,
      this.noviNaziv
    );
    this.prikaziMojeZanrove();
  }

  async brisanje() {
    await this.zanroviService.dajMojePodatkeBrisanje();
    await this.prikaziMojeZanrove();
  }
}
