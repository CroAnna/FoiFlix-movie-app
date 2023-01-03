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
    console.log('on init');
    // dohvati sve filmove
    this.filmoviNeodobreni = await this.filmoviService.dajMojeFilmove();
  }

  odobriFilm(idFilma: Number) {}

  odbaciFilm(idFilma: Number) {}
}
