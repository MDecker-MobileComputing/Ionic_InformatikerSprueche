import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Seite3PageRoutingModule } from './seite3-routing.module';

import { Seite3Page } from './seite3.page';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Seite3PageRoutingModule,
    TranslateModule
  ],
  declarations: [Seite3Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Seite3PageModule {}
