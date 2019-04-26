import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonApiService } from '../common-api/common-api.service';
import { forkJoin, Observable } from 'rxjs';
import { Cacheable } from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(
    private http: HttpClient, 
    private commonApi: CommonApiService) { }

    public requestDataFromMultipleSources(): Observable<any[]> {

      let getMainNews = this.commonApi.get("public/v1/news/main");
  
      return forkJoin([getMainNews]);
  
    }
}