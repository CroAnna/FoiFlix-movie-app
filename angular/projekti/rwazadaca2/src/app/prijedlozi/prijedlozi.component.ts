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

  constructor(private filmoviService: FilmoviService) {}

  async ngOnInit() {
    this.filmoviNeodobreni = await this.filmoviService.dajMojeFilmove();
  }

  odobriFilm(id: Number) {
    this.filmoviService.odobri(id);
  }

  odbaciFilm(id: Number) {
    this.filmoviService.odbaci(id);
  }
}
