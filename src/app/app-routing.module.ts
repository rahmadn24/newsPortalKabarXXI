import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LamanBeritaComponent } from './page/laman-berita/laman-berita.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'laman-berita', component: LamanBeritaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
