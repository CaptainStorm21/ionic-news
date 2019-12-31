import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { HeadlinesPage } from './headlines.page';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: HeadlinesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [HeadlinesPage]
})
export class HeadlinesPageModule {}
