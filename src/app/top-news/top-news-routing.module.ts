import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopNewsPage } from './top-news.page';

const routes: Routes = [
  {
    path: '',
    component: TopNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopNewsPageRoutingModule {}
