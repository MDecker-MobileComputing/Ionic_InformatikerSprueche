import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';

/**
 * Seite zur Demonstration, wie programmatisch auf einen übersetzen Text
 * zugegriffen wird.
 */
@Component({
  selector: 'app-seite4',
  templateUrl: './seite4.page.html',
  styleUrls: ['./seite4.page.scss'],
})
export class Seite4Page  {

  /** Übersetzung für Wort "Spruch", das als Dialogtitel verwendet wird; wird im Konstruktor gefüllt. */
  private spruchTitle = "";

  /**
   * Konstruktor für Dependency Injection.
   */
  constructor(private translate: TranslateService,
              private alertCtrl: AlertController) {

    this.translate.get("spruch").subscribe( (uebersetzung: string) => {

        this.spruchTitle = uebersetzung;
    });
  }

  /**
   * Button-Event-Händler für Anzeige zufällig ausgewählter Spruch.
   */

  private onZufallsSpruchButton() {

    const spruchNummer = this.erzeugeZufallszahl( 1, 4 );
    const spruchKey = `spruch_${spruchNummer}`;

    this.translate.get(spruchKey).subscribe( (uebersetzung: string) => {

      this.zeigeDialog(this.spruchTitle, uebersetzung);
    });


    /*
    // Alternative: synchrone Abfrage übersetzter Text => wenn Texte noch nicht geladen, dann wird nichts zurückgegeben
    const uebersetzung = this.translate.instant(spruchKey);
    this.zeigeDialog(this.spruchTitle, uebersetzung);
    */
  }

  /**
   * Hilfsmethode: Erzeugt Zufallszahl im vorgegebenen Bereich.
   *
   * Beispiel: `erzeugeZufallszahl(2,5)` kann die folgenden Zahlen zurückliefern: 2, 3, 4, 5.
   *
   * @param min Untergrenze (inkl.)
   * @param max Obergrenze (inkl.)
   */
  private erzeugeZufallszahl(min: number, max: number): number {

    let num = Math.random() * (max - min) + min;

    return Math.round(num);
  }

  /**
   * Hilfsmethode: Alert anzeigen, siehe auch https://ionicframework.com/docs/api/alert
   *
   * @param titel Titel des Dialogs
   * @param nachricht Im Dialog anzuzeigender Text
   */
   async zeigeDialog(titel: string, nachricht: string) {

    const meinAlert =
          await this.alertCtrl.create({
              header  : titel,
              message : nachricht,
              buttons : [ "Ok" ]
          });

    await meinAlert.present();
  }

}
