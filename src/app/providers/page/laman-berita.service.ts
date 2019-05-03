import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonApiService } from '../common-api/common-api.service';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LamanBeritaService {

  constructor(
    private http: HttpClient, 
    private commonApi: CommonApiService) { }

    public createComment(bodyRequest: any){
      return this.commonApi.post("auth/v1/newsComment", bodyRequest);
    }

    public getRelatedNews(keyword){
      return this.commonApi.get(`public/v1/news/related/${keyword}`);
    }

    public requestDataFromMultipleSources(paramId): Observable<any[]> {

      let getDetailNews = this.commonApi.get(`public/v1/news/detail/${paramId}`);
      let getCommentNews = this.commonApi.get(`public/v1/newsComment/getByNewsId/${paramId}`);
      let getLastNews = this.commonApi.get("public/v1/news/latest");
      let getMainNews = this.commonApi.get("public/v1/news/main");
      let getAdvertiser = this.commonApi.get('public/v1/advertiser');
      return forkJoin([getDetailNews, getCommentNews, getLastNews, getMainNews ,getAdvertiser]);
  
    }
}
