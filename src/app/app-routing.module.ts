import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LamanBeritaComponent } from './page/laman-berita/laman-berita.component';
import { NewsByCategoryComponent } from './page/news-by-category/news-by-category.component';
import { LamanComponent } from './page/laman/laman.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'kategori/:kategori', component: NewsByCategoryComponent},
  { path: 'laman-berita/:type/:id/:title', component: LamanBeritaComponent},
  { path: 'laman/:tag', component: LamanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
