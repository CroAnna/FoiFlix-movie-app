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

  constructor(private zanroviService: ZanroviService) {}

  async ngOnInit() {
    await this.prikaziMojeZanrove();
  }

  async prikaziMojeZanrove() {
    this.zanroviMoji = await await this.zanroviService.dajMojePodatke();
    console.log(this.zanroviMoji);
  }
}
