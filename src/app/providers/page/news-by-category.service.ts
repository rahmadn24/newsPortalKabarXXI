import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonApiService } from '../common-api/common-api.service';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsByCategoryService {

  constructor(
    private http: HttpClient, 
    private commonApi: CommonApiService) { }

    public requestDataFromMultipleSources(param): Observable<any[]> {

      let getNewsByCategory = this.commonApi.get(`public/v1/news/newsByCategory/${param}`);
      let getVideo = this.commonApi.get("public/v1/video");
      let getLatestNews = this.commonApi.get("public/v1/news/main");
      let getPopularNews = this.commonApi.get("public/v1/news/popular");
  
      return forkJoin([getNewsByCategory, getVideo, getLatestNews, getPopularNews]);
  
    }
}
