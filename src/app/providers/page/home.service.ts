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
  imageData;

  constructor(
    private http: HttpClient,
    private commonApi: CommonApiService) { }

  public searchResult(param, param2: any) {
    return this.commonApi.get(`public/v1/news/searchNews/${param}/kabarxxi`, param2)
  }

  public getMainNews(param: any) {
    return this.commonApi.get("public/v1/news/main", param);
  }

  public getLatestNews(param: any) {
    return this.commonApi.get("public/v1/news/latest", param);
  }

  public requestDataFromMultipleSources(): Observable<any[]> {

    let params = {
      page: 0,
      size: 10,
      sort: 'CreatedDate,DESC'
    };

    let getVideo = this.commonApi.get("public/v1/video");
    let getPopularNews = this.commonApi.get("public/v1/news/popular", params);

    return forkJoin([getVideo, getPopularNews]);

  }
}
