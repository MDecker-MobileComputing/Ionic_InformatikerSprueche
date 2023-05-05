import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importe für i18n
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Benötigt für <swiper-slide>, siehe auch https://ionicframework.com/docs/angular/slides
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/**
 * Factory-Funktion, um speziellen Ordner für i18n-Dateien zu definieren.
 * Die i18n-Dateien für die verschiedenen Sprache müssen im JSON-Format vorliegen,
 * also z.B. `de.json`, `en.json`, etc.
 *
 * Für die Verwendung von ngx-translate mit Ionic müssen wir einen andere Ordner
 * für die i18n-Dateien definieren, nämlich `./assets/i18n/`.
 */
export function erzeugeTranslateLoader(http: HttpClient) {

  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            HttpClientModule,
            TranslateModule,
            TranslateModule.forRoot({
              loader: {
                  provide: TranslateLoader,
                  useFactory: (erzeugeTranslateLoader),
                  deps: [HttpClient]
              }
          })            
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // doesn't work? https://forum.ionicframework.com/t/swiper-container-is-not-know-element/233240/
})
export class AppModule {}
