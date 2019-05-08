import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonApiService } from '../common-api/common-api.service';

@Injectable({
  providedIn: 'root'
})
export class LamanService {

  constructor(
    private http: HttpClient, 
    private commonApi: CommonApiService
  ) { }

  public getLamanTag(tag){
    return this.commonApi.get(`public/v1/laman/lamanByTag/${tag}`);
  }
}
