import { Component, OnInit } from '@angular/core';
import { FilmoviService } from '../servisi/filmovi.service';

@Component({
  selector: 'app-prijedlozi',
  templateUrl: './prijedlozi.component.html',
  styleUrls: ['./prijedlozi.component.scss'],
})
export class PrijedloziComponent implements OnInit {
  filmoviNeodobreni: any;
  filter = { odobreno: 1 };
  imageUrl: any = '';

  constructor(private filmoviService: FilmoviService) {}

  ngOnInit() {
    this.prikaziMojeFilmove();
  }

  async odobriFilm(id: Number) {
    await this.filmoviService.odobri(id);
    this.prikaziMojeFilmove();
  }

  async odbaciFilm(id: Number) {
    await this.filmoviService.odbaci(id);
    this.prikaziMojeFilmove();
  }

  async prikaziMojeFilmove() {
    this.filmoviNeodobreni = await this.filmoviService.dajMojeFilmove();
  }
}
