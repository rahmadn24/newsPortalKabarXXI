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

    public requestDataFromMultipleSources(paramId): Observable<any[]> {

      let getDetailNews = this.commonApi.get(`public/v1/news/detail/${paramId}`);
  
      return forkJoin([getDetailNews]);
  
    }
}
