import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopNewsPageRoutingModule } from './top-news-routing.module';

import { TopNewsPage } from './top-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopNewsPageRoutingModule
  ],
  declarations: [TopNewsPage]
})
export class TopNewsPageModule {}
