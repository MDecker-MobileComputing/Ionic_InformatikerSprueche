import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Seite3Page } from './seite3.page';

const routes: Routes = [
  {
    path: '',
    component: Seite3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Seite3PageRoutingModule {}
