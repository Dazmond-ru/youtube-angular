import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { MainComponent } from './youtube/pages/main/main.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { DetailedInformationComponent } from './youtube/pages/detailed-information/detailed-information.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':id', component: DetailedInformationComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
