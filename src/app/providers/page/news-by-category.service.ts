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

    public getNewsByCategory(param, param2: any){
      return this.commonApi.get(`public/v1/news/newsByCategory/${param}`, param2);
    }

    public getLatestNews(param: any) {
      return this.commonApi.get("public/v1/news/latest", param);
    }

    public requestDataFromMultipleSources(): Observable<any[]> {
      let getVideo = this.commonApi.get("public/v1/video");
      let getPopularNews = this.commonApi.get("public/v1/news/popular");
  
      return forkJoin([getVideo, getPopularNews]);
  
    }
}
