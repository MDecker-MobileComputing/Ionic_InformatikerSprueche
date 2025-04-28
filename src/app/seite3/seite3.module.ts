import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { Seite3PageRoutingModule } from './seite3-routing.module';

import { Seite3Page } from './seite3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Seite3PageRoutingModule,
    TranslateModule
  ],
  declarations: [Seite3Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // https://ionicframework.com/docs/angular/slides
})
export class Seite3PageModule {}
