import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'top-news',
        children: [
          {
            path: '',
            loadChildren: '../top-news/top-news.module#TopNewsPageModule'
          }
        ]
      },
      {
        path: 'headlines',
        children: [
          {
            path: '',
            loadChildren: '../headlines/headlines.module#HeadlinesPageModule'
          }
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: '../favorites/favorites.module#FavoritesPageModule'
          }
        ]
      },
      {
        path: 'sources',
        children: [
          {
            path: '',
            loadChildren: '../sources/sources.module#SourcesPageModule'
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: '../settings/settings.module#SettingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/top-news',
        pathMatch: ''
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/top-news',
    pathMatch: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
