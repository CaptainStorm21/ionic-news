import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopNewsPageRoutingModule } from './top-news-routing.module';

import { TopNewsPage } from './top-news.page';
import { ComponentsModule } from './../components/components.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TopNewsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    TopNewsPageRoutingModule
  ],
  declarations: [TopNewsPage]
})
export class TopNewsPageModule {}
