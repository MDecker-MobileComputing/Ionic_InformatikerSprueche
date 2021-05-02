import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private translate: TranslateService, 
              private menuController: MenuController) {

    // Default-Sprache für i18n setzen
    this.translate.setDefaultLang("en");
  }

  menuSchliessen() {
    
    this.menuController.close();
  }  

}
