import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUiLoaderModule } from  'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US, NZ_ICONS} from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HeaderComponent } from './page/basicPage/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { MatIconModule, MatSidenavModule, MatGridListModule, MatTabsModule } from '@angular/material';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { HomeService } from './providers/page/home.service';
import { CommonApiService } from './providers/common-api/common-api.service';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { FooterComponent } from './page/basicPage/footer/footer.component';
import { LamanBeritaComponent } from './page/laman-berita/laman-berita.component';
import { NewsByCategoryComponent } from './page/news-by-category/news-by-category.component';
import { SyaratDanKetentuanComponent } from './page/other/syarat-dan-ketentuan/syarat-dan-ketentuan.component';
import { AboutComponent } from './page/other/about/about.component';
import { ContactComponent } from './page/other/contact/contact.component';
import { RedaksiComponent } from './page/other/redaksi/redaksi.component';
import { PedomanMediaSiberComponent } from './page/other/pedoman-media-siber/pedoman-media-siber.component';
import { KontributorBeritaComponent } from './page/other/kontributor-berita/kontributor-berita.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LamanBeritaComponent,
    NewsByCategoryComponent,
    SyaratDanKetentuanComponent,
    AboutComponent,
    ContactComponent,
    RedaksiComponent,
    PedomanMediaSiberComponent,
    KontributorBeritaComponent
  ],
  imports: [
    NgxUiLoaderModule,
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgtUniversalModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },  { provide: NZ_ICONS, useValue: icons },
  HomeService,
  CommonApiService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
