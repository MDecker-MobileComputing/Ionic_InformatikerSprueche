import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Seite2Page } from './seite2.page';

const routes: Routes = [
  {
    path: '',
    component: Seite2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Seite2PageRoutingModule {}
