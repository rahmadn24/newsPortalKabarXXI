import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonApiService } from '../common-api/common-api.service';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(
    private http: HttpClient,
    private commonApi: CommonApiService
  ) { }

  public requestDataFromMultipleSources(): Observable<any[]> {

    let getAdvertiser = this.commonApi.get('public/v1/advertiser');
    return forkJoin([getAdvertiser]);

  }

  public getAdvertiser(params) {

    return this.commonApi.get('public/v1/advertiser/new', params);

  }
}
