import {
  AfterContentChecked,
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';
import { KorisniciService } from '../servisi/korisnici.service';

//import { ChangeDetectorRef } from '@angular/core'; // rerenderanje

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.scss'],
})
export class NavigacijaComponent implements AfterContentChecked, OnInit {
  prijavljen: string | null = sessionStorage.getItem('prijavljeniKorisnik');

  displayObicni = false;
  displamKorisnik = false;
  displayAdmin = false;

  constructor(private korisniciService: KorisniciService) {}

  odjaviKorisnika() {
    sessionStorage.setItem('prijavljeniKorisnik', ''); //nema prijavljenog
  }

  ngOnInit(): void {
    console.log('on init u glavnom');
    this.PrikaziNavigaciju();
  }

  PrikaziNavigaciju() {
    this.prijavljen = sessionStorage.getItem('prijavljeniKorisnik');
    console.log('prijavljen - ' + this.prijavljen);
  }

  ngAfterContentChecked(): void {
    //console.log(' ngAfterContentChecked');
    //();
    // ovo se svako malo pozove
  }
}
