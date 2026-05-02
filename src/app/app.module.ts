import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [AppComponent],
  imports: [  BrowserModule ,
              IonicModule.forRoot(),
              AppRoutingModule,
              TranslateModule.forRoot({
                loader: provideTranslateHttpLoader({
                  prefix: './assets/i18n/',
                  suffix: '.json'
                })
              })
      ],
  providers: [ { provide: RouteReuseStrategy,
               useClass: IonicRouteStrategy },
               provideHttpClient()
             ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
