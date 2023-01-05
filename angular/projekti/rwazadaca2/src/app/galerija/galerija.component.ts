import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmoviService } from '../servisi/filmovi.service';

@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.scss'],
})
export class GalerijaComponent implements OnInit {
  odabraniFilm: any = '';
  filmId: any;

  constructor(
    private aktiviranRoute: ActivatedRoute,
    private filmoviServis: FilmoviService
  ) {}

  async ngOnInit() {
    this.filmId = this.aktiviranRoute.snapshot.paramMap.get('id');
    console.log('this.film id ---> ' + this.filmId);
    this.odabraniFilm = await this.filmoviServis.dajOdabraniFilm(this.filmId);
  }
}
