import { AlbumListComponent } from './components/album-list/album-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ImageListComponent } from './components/image-list/image-list.component';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'albums/:userId', component: AlbumListComponent },
  { path: 'photos/:albumId/:userId', component: ImageListComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [UserListComponent, AlbumListComponent, ImageListComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
