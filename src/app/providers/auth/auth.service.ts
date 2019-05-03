import { Injectable } from '@angular/core';
import { CommonApiService } from '../common-api/common-api.service';
import { HandlerResponseService } from '../handler-response/handler-response.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private commonApi: CommonApiService, private handlerResponse: HandlerResponseService) { }
  
  auth(body){
    return this.commonApi.validate("oauth/token",body);
  }

  getProfile(user){
    return this.commonApi.get(`auth/v1/users/${user}`);
  }

  register(body){
    return this.commonApi.post("public/v1/users", body);
  }
}