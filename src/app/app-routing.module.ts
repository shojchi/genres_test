import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {MainGenresComponent} from './main-genres/main-genres.component';
import {AlbumsComponent} from './albums/albums.component';

const appRoutes: Routes = [
  {path: 'genres', component: MainGenresComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: '', redirectTo: '/genres', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
