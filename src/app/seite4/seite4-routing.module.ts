import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Seite4Page } from './seite4.page';

const routes: Routes = [
  {
    path: '',
    component: Seite4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Seite4PageRoutingModule {}
