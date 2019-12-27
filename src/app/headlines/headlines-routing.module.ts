import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadlinesPage } from './headlines.page';

const routes: Routes = [
  {
    path: '',
    component: HeadlinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadlinesPageRoutingModule {}
