import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmoviService } from '../servisi/filmovi.service';

@Component({
  selector: 'app-film-detalji',
  templateUrl: './film-detalji.component.html',
  styleUrls: ['./film-detalji.component.scss'],
})
export class FilmDetaljiComponent implements OnInit {
  odabraniFilm: any = '';
  filmId: any;
  imageUrl: any = '';

  constructor(
    private aktiviranRoute: ActivatedRoute,
    private filmoviServis: FilmoviService
  ) {}

  async ngOnInit() {
    this.filmId = this.aktiviranRoute.snapshot.paramMap.get('id');
    console.log('this.film id ---> ' + this.filmId);
    this.odabraniFilm = await this.filmoviServis.dajOdabraniFilm(this.filmId);
    this.imageUrl = this.odabraniFilm.poster_path;
  }
}
