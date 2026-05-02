import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { register } from 'swiper/element/bundle';


// für <swiper-slide>: https://ionicframework.com/docs/angular/slides
register();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private translate: TranslateService, 
              private menuController: MenuController
  ) {
    this.translate.setFallbackLang('en');
    const browserLang = navigator.language.split('-')[0];
    this.translate.use(browserLang);
  }

  /**
   * Event-Handler-Methode für das Schließen des Menüs.
   */
  menuSchliessen() {

      this.menuController.close();
  }
}
