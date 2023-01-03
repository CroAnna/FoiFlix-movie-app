import { Component, OnInit } from '@angular/core';
import { ZanroviService } from '../servisi/zanrovi.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss'],
})
export class PocetnaComponent implements OnInit {
  zanroviMoji: any;
  constructor(private zanroviService: ZanroviService) {}

  ngOnInit(): void {
    this.prikaziMojeZanrove();
  }

  async prikaziMojeZanrove() {
    this.zanroviMoji = await this.zanroviService.dajMojePodatke();
    console.log(this.zanroviMoji);
  }
}
