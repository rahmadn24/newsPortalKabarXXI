import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonApiService } from '../common-api/common-api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient, 
    private commonApi: CommonApiService
  ) { }

  public addViews(params){
    return this.commonApi.put(`public/v1/news/${params}`, null);
  }
}
