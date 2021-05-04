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

  /**
   * Konstruktor für Dependency Injection.
   */
  constructor(private translate: TranslateService,
              private alertCtrl: AlertController) { }

  /**
   * Button-Event-Händler für Anzeige zufällig ausgewählter Spruch.
   */
  private onZufallsSpruchButton() {

    const spruchNummer = this.erzeugeZufallszahl( 1, 4 );

    const spruchKey = `spruch_${spruchNummer}`;

    this.translate.get(spruchKey).subscribe( (text: string) => {

      this.zeigeDialog("Spruch", text);
    });
  }

  /**
   * Erzeugt Zufallszahl im vorgegebenen Bereich.
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
