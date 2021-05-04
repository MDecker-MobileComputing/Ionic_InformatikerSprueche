import { Component } from '@angular/core';

@Component({
  selector: 'app-seite2',
  templateUrl: './seite2.page.html',
  styleUrls: ['./seite2.page.scss'],
})
export class Seite2Page {

  /** Anzahl der Sprüche, die in den i18n-Dateien definiert ist. */
  private readonly ANZ_SPRUECHE = 4;

  /**
   * Array mit Zahlen von 1 bis ANZ_SPRUECHE füllen.
   * Lösung nach https://basarat.gitbook.io/typescript/main-1/create-arrays
   */
  private nummernArray = [...new Array(this.ANZ_SPRUECHE)].map( (_,i) => i+1 );

  constructor() { }

}
