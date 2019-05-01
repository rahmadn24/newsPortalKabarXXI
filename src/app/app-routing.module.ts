import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LamanBeritaComponent } from './page/laman-berita/laman-berita.component';
import { NewsByCategoryComponent } from './page/news-by-category/news-by-category.component';
import { SyaratDanKetentuanComponent } from './page/other/syarat-dan-ketentuan/syarat-dan-ketentuan.component';
import { RedaksiComponent } from './page/other/redaksi/redaksi.component';
import { KontributorBeritaComponent } from './page/other/kontributor-berita/kontributor-berita.component';
import { PedomanMediaSiberComponent } from './page/other/pedoman-media-siber/pedoman-media-siber.component';
import { ContactComponent } from './page/other/contact/contact.component';
import { AboutComponent } from './page/other/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'kategori/:kategori', component: NewsByCategoryComponent},
  { path: 'laman-berita/:id/:title', component: LamanBeritaComponent},
  { path: 'syarat-dan-ketentuan', component: SyaratDanKetentuanComponent},
  { path: 'redaksi', component: RedaksiComponent},
  { path: 'pedoman-media-siber', component: PedomanMediaSiberComponent},
  { path: 'kontributor-berita', component: KontributorBeritaComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
