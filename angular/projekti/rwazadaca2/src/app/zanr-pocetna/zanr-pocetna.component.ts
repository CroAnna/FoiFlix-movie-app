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
  constructor(private filmoviService: FilmoviService) {}

  async ngOnInit() {
    this.filmovi = (
      await this.filmoviService.dohvatiDvaPoZanru(this.zanr)
    ).slice(0, 2); // prikaz samo prva dva
  }
}
