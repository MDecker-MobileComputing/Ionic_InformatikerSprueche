import { Component } from '@angular/core';

@Component({
  selector: 'app-seite2',
  templateUrl: './seite2.page.html',
  styleUrls: ['./seite2.page.scss'],
  standalone: false
})
export class Seite2Page {

  public readonly ANZ_SPRUECHE = 4;

  public nummernArray = [...new Array(this.ANZ_SPRUECHE)].map( (_,i) => i+1 );

}



