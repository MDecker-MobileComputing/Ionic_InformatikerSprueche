import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {

    this.initialisierung();
  }

  /**
   * Default-Sprache für i18n setzen.
   */
  initialisierung() {

    this.translate.setDefaultLang("en");
  }

}
