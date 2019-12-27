import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'top-news',
  //   loadChildren: () => import('./top-news/top-news.module').then( m => m.TopNewsPageModule)
  // },
  // {
  //   path: 'headlines',
  //   loadChildren: () => import('./headlines/headlines.module').then( m => m.HeadlinesPageModule)
  // },
  // {
  //   path: 'sources',
  //   loadChildren: () => import('./sources/sources.module').then( m => m.SourcesPageModule)
  // },
  // {
  //   path: 'favorites',
  //   loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
