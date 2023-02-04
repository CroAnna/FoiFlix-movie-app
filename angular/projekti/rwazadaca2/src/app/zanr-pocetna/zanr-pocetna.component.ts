import { Component, Input, OnInit } from '@angular/core';
import { FilmoviService } from '../servisi/filmovi.service';
import { ZanroviService } from '../servisi/zanrovi.service';

@Component({
  selector: 'app-zanr-pocetna',
  templateUrl: './zanr-pocetna.component.html',
  styleUrls: ['./zanr-pocetna.component.scss'],
})
export class ZanrPocetnaComponent implements OnInit {
  @Input('zanr') zanr!: any;
  filmovi: any = '';
  merged: any = [];

  constructor(private filmoviService: FilmoviService) {}

  async ngOnInit() {
    //this.filmovi = this.filmoviService.dohvatiDvaPoZanru(this.zanr);
    this.filmovi = await this.filmoviService.dohvatiDvaPoZanru(this.zanr);
    //console.log('odgovor = ' + filmovi);
  }

  // async prikaziRandomFilmove() {
  //   console.log('u prikazi randome');

  //   for (let i = 0; i < this.merged.length; i++) {
  //     console.log('i ' + i + ', ' + this.merged[i].film_id);

  //     this.filmovi = await this.filmoviService.dajOdabraniFilm(
  //       this.merged.film_id
  //     );

  //     // this.filmovi = JSON.parse(
  //     //   await this.filmoviService.dajOdabraniFilm(this.merged[i].film_id)
  //     // );
  //     console.log(this.filmovi); // PDOACI
  //     console.log(JSON.stringify(this.filmovi));
  //   }
  // }
}
