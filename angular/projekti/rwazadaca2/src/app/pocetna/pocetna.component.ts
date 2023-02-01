import { Component, OnInit } from '@angular/core';
import { FilmoviService } from '../servisi/filmovi.service';
import { ZanroviService } from '../servisi/zanrovi.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss'],
})
export class PocetnaComponent implements OnInit {
  zanroviMoji: any;
  randomFilm1: any = '';
  randomFilm2: any = '';
  merged: any = [];
  constructor(
    private zanroviService: ZanroviService,
    private filmoviService: FilmoviService
  ) {}

  async ngOnInit() {
    this.prikaziMojeZanrove();
    await this.prikaziRandomFilmove();
  }

  async prikaziMojeZanrove() {
    this.zanroviMoji = await this.zanroviService.dajMojePodatke();
    console.log(this.zanroviMoji);
    for (let zanr of this.zanroviMoji) {
      let odg = JSON.parse(await this.filmoviService.dohvatiDvaPoZanru(zanr)); // salje zanr, mozes parsirat i na servisu ak ne zelis tu
      console.log('odgovor = ' + odg); // odg su jsoni film_zanr tablica

      this.merged = [...this.merged, ...odg]; // spaja json odgovor sa prethodnim json odgovorima

      console.log('MERGED ' + this.merged);
    }
  }

  async prikaziRandomFilmove() {
    this.randomFilm1 = await this.filmoviService.dajOdabraniFilm('370172');
    console.log('odabrani ' + this.randomFilm1);
  }
}
