import {
  AfterContentChecked,
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { KorisniciService } from '../servisi/korisnici.service';

//import { ChangeDetectorRef } from '@angular/core'; // rerenderanje

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.scss'],
})
export class NavigacijaComponent {
  constructor(private korisniciService: KorisniciService) {}

  get prijavljenAdmin() {
    return sessionStorage.getItem('prijavljeniKorisnik') == '1';
  }
  get prijavljenKorisnik() {
    return sessionStorage.getItem('prijavljeniKorisnik') == '2';
  }

  odjaviKorisnika() {
    sessionStorage.setItem('prijavljeniKorisnik', ''); //nema prijavljenog
  }
}
