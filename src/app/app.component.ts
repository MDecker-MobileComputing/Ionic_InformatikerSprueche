import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  /**
   * Default-Sprache auf Englisch setzen.
   */
  constructor(private translate: TranslateService, 
              private menuController: MenuController) {

    this.translate.setDefaultLang("en");
    //this.translate.setDefaultLang("de");
  }

  /**
   * Event-Handler-Methode für das Schließen des Menüs.
   */
  menuSchliessen() {
    
    this.menuController.close();
  }  

}
