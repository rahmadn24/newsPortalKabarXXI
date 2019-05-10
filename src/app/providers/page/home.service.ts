import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonApiService } from '../common-api/common-api.service';
import { forkJoin, Observable } from 'rxjs';
import { Cacheable } from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  videoData;

  constructor(
    private http: HttpClient, 
    private commonApi: CommonApiService) { }

    public searchResult(param) {
      return this.commonApi.get(`public/v1/news/searchNews/${param}/kabarxxi`)
    }

    public requestDataFromMultipleSources(): Observable<any[]> {

      let getMainNews = this.commonApi.get("public/v1/news/main");
      let getVideo = this.commonApi.get("public/v1/video");
      let getLatestNews = this.commonApi.get("public/v1/news/main");
      let getPopularNews = this.commonApi.get("public/v1/news/popular");
  
      return forkJoin([getMainNews, getVideo, getLatestNews, getPopularNews]);
  
    }
}
