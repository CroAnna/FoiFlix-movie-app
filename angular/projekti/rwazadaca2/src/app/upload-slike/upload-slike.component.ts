import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-slike',
  templateUrl: './upload-slike.component.html',
  styleUrls: ['./upload-slike.component.scss'],
})
export class UploadSlikeComponent {
  isLoading: any = true;

  @ViewChild('myInput') myInputVariable!: ElementRef; // ! da nema errora onog

  odabranFile(event: any) {
    if (event.target.value != null) {
      const velicinaFile = event.target.files[0].size;
      const velicinaKB = velicinaFile / 1024;
      if (velicinaKB >= 500) {
        this.isLoading = true;
        console.log('veci od 500, nije okej');
        this.ukloniSliku();
        alert('File je prevelik. Mora biti do 500KB');
      } else {
        this.isLoading = false;
        console.log('manji od 500, okej');
      }
    }
  }

  uploadajSliku() {
    console.log('uploadaj');
    // TODO upload slike
    this.ukloniSliku();
  }

  ukloniSliku() {
    this.myInputVariable.nativeElement.value = '';
  }
}
