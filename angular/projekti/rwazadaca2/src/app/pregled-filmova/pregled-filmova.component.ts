import { Component, OnInit } from '@angular/core';
import { FilmoviService } from '../servisi/filmovi.service';

@Component({
  selector: 'app-pregled-filmova',
  templateUrl: './pregled-filmova.component.html',
  styleUrls: ['./pregled-filmova.component.scss'],
})
export class PregledFilmovaComponent implements OnInit {
  filmoviOdobreni: any;
  filter = { odobreno: 1 };

  constructor(private filmoviService: FilmoviService) {}

  async ngOnInit() {
    console.log('on init');
    this.filmoviOdobreni = await this.filmoviService.dajMojeFilmove();
  }
}
