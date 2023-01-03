import { AfterContentChecked, Component, OnChanges } from '@angular/core';

//import { ChangeDetectorRef } from '@angular/core'; // rerenderanje

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.scss'],
})
export class NavigacijaComponent implements AfterContentChecked {
  prijavljen: string | null = sessionStorage.getItem('prijavljeniKorisnik');

  //constructor(private cdr: ChangeDetectorRef) {}

  odjaviKorisnika() {
    sessionStorage.setItem('prijavljeniKorisnik', ''); //nema prijavljenog
  }

  ngAfterContentChecked(): void {
    console.log(' ngAfterContentChecked');
    //();
    // ovo se svako malo pozove
  }
}
