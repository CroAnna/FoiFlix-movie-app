import { Component, Input, OnInit } from '@angular/core';
import { FilmoviService } from '../servisi/filmovi.service';

@Component({
  selector: 'app-film-pocetna',
  templateUrl: './film-pocetna.component.html',
  styleUrls: ['./film-pocetna.component.scss'],
})
export class FilmPocetnaComponent implements OnInit {
  @Input('film') film!: any;

  constructor(private filmoviService: FilmoviService) {}

  ngOnInit(): void {
    console.log('FILM' + this.film);
  }
}
