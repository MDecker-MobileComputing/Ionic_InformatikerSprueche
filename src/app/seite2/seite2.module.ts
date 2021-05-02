import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { Seite2PageRoutingModule } from './seite2-routing.module';

import { Seite2Page } from './seite2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Seite2PageRoutingModule,
    TranslateModule
  ],
  declarations: [Seite2Page]
})
export class Seite2PageModule {}
