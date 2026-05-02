import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Seite4PageRoutingModule } from './seite4-routing.module';

import { Seite4Page } from './seite4.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Seite4PageRoutingModule,
    TranslateModule
  ],
  declarations: [Seite4Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Seite4PageModule {}
