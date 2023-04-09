import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { YoutubeGuard } from './youtube/guards/youtube.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { AdminComponent } from './core/pages/admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/module/youtube.module').then(m => m.YoutubeModule),
    canActivate: [YoutubeGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [YoutubeGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
