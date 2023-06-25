import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';

import { register } from 'swiper/element/bundle';

// für <swiper-slide>: https://ionicframework.com/docs/angular/slides
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private menuController: MenuController,
              private translate: TranslateService, 
              private platform: Platform) {

        this.platform.ready().then( () => { this.uebersetzungInitialisieren(); } );
  }

  
  /**
   * Übersetzung initialisieren, d.h. u.a. die aktuelle Browsersprache auswerten.
   * Lösung nach https://masteringionic.com/blog/2018-07-14-creating-a-multi-language-ionic-translation-app-with-ngx-translate/
   *
   * Diese Methode darf erst dann aufgerufen werden, wenn der von der Methode Platform::read() zurückgegebene Intent
   * aufgelöst wurde.
   */
  private uebersetzungInitialisieren() {

    // Wenn ein Text in aktueller Sprache nicht vorhanden ist, dann englischen Text anzeigen
    this.translate.setDefaultLang("en");

    if (this.translate.getBrowserLang() !== undefined) {

        let browserSprache = this.translate.getBrowserLang();
        if (!browserSprache) { browserSprache = "en"; }

        console.log(`browsersprache=${browserSprache}`);
        this.translate.use(browserSprache);

    } else  {

        this.translate.use("en"); // Fallback-Sprache
        console.log("Fallback-Sprache wird gesetzt!");
    }
  }  


  /**
   * Event-Handler-Methode für das Schließen des Menüs.
   */
  menuSchliessen() {

      this.menuController.close();
  }
}
