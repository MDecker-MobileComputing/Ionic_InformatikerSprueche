import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seite3',
  templateUrl: './seite3.page.html',
  styleUrls: ['./seite3.page.scss'],
  standalone: false
})
export class Seite3Page {

    /** Anzahl der Sprüche, die in den i18n-Dateien definiert ist. */
    public readonly ANZ_SPRUECHE = 4;

    /**
     * Array mit Zahlen von 1 bis ANZ_SPRUECHE füllen.
     * Lösung nach https://basarat.gitbook.io/typescript/main-1/create-arrays
     */
    public nummernArray = [...new Array(this.ANZ_SPRUECHE)].map( (_,i) => i+1 );

}
