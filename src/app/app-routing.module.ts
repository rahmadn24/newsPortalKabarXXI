import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LamanBeritaComponent } from './page/laman-berita/laman-berita.component';
import { NewsByCategoryComponent } from './page/news-by-category/news-by-category.component';
import { LamanComponent } from './page/laman/laman.component';
import { ResultSearchComponent } from './page/result-search/result-search.component';
import { NewsVideoComponent } from './page/news-video/news-video.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kategori/:kategori', component: NewsByCategoryComponent },
  { path: 'laman-berita/:type/:id/:title', component: LamanBeritaComponent },
  { path: 'laman-berita/:type/:id/:title/:image', component: LamanBeritaComponent },
  { path: 'laman/:tag', component: LamanComponent },
  { path: 'laman-berita/:search', component: ResultSearchComponent },
  { path: 'laman-video', component: NewsVideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
