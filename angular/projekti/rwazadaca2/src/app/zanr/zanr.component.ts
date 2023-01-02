import { Component } from '@angular/core';
import { ZanroviService } from '../zanrovi.service';

@Component({
  selector: 'app-zanr',
  templateUrl: './zanr.component.html',
  styleUrls: ['./zanr.component.scss'],
})
export class ZanrComponent {
  zanroviMoji: any;

  constructor(private zanroviService: ZanroviService) {}

  /*
  async postavi(): Promise<void> { // drugi nacin 
    console.log('u postavi');
    this.zanroviMoji = await this.zanroviService.dajMojePodatke();
  }*/

  async prikaziMojeZanrove() {
    const heroes = await this.zanroviService.dajMojePodatke();
    this.zanroviMoji = heroes;
  }
}
