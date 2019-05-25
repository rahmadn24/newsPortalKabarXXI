import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US, NZ_ICONS } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { LamanComponent } from './page/laman/laman.component';
import { ResultSearchComponent } from './page/result-search/result-search.component';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
import { AppModule } from './app.module';

registerLocaleData(localeId, 'id');

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [
    NgxUiLoaderModule,
    
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgtUniversalModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: LOCALE_ID, useValue: 'id' }, { provide: NZ_ICONS, useValue: icons },
    HomeService,
    CommonApiService
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
