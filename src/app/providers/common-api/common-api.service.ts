import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Config } from '../../config/config';
import { catchError } from 'rxjs/operators';
import { HandlerResponseService } from '../handler-response/handler-response.service';
// import { NzMessageService } from 'ng-zorro-antd';
import * as CryptoJS from 'crypto-js';
const cryptoKey = "#emEri0Enc123#";
@Injectable({
  providedIn: 'root'
})
export class CommonApiService {


  BASE_URL: string;
  headers = null;


  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private http: HttpClient, private config: Config, private handlerResponseService: HandlerResponseService) {
    this.BASE_URL = config.BASE_URL;
  }

  getHeaders() {
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("gen_token"));
    return this.headers;
  }


  get(url: string, params?: any, reqOpts?: any): Observable<any> {

    if (this.checkConnection()) {

      if (!reqOpts) {
        reqOpts = {
          params: new HttpParams()
        };
      }

      if (params) {

        reqOpts.params = new HttpParams();

        for (let reqParams in params) {
          reqOpts.params = reqOpts.params.set(reqParams, params[reqParams]);
        }

      }
      if (localStorage.getItem("gen_token")) {
        reqOpts.headers = this.getHeaders();
      }

      return this.http.get<any>(this.BASE_URL + url, reqOpts)
        .pipe(
          catchError(
            (error: any, caught: Observable<HttpEvent<any>>) => {
              this.handlerResponseService.failedResponse(error);
              throw error;
            }
          ),
        );

    } else {
      return null;
    }

  }

  post(url: string, body: any, reqOpts?: any): Observable<any> {

    if (this.checkConnection()) {

      if (localStorage.getItem("gen_token")) {
        reqOpts = {
          headers: this.getHeaders()
        };
      }

      return this.http.post<any>(this.BASE_URL + url, body, reqOpts)
        .pipe(
          catchError(
            (error: any, caught: Observable<HttpEvent<any>>) => {
              this.handlerResponseService.failedResponse(error);
              throw error;
            }
          ),
        );

    } else {
      // this.message.create("error", "Anda tidak terhubung internet. Silahkan periksa koneksi anda");
      return null;
    }

  }

  put(url: string, body: any,  params?: any , reqOpts?: any): Observable<any> {

    if (this.checkConnection()) {

      if (!reqOpts) {
        reqOpts = {
          params: new HttpParams()
        };
      }

      if (this.localStorage.getItem("token")) {
        reqOpts.headers = this.getHeaders();
      }

      return this.http.put<any>(this.BASE_URL + url, body, reqOpts)
        .pipe(
          catchError(
            (error: any, caught: Observable<HttpEvent<any>>) => {
              this.handlerResponseService.failedResponse(error);
              throw error;
            }
          ),
        );

    } else {
      //this.message.create("error", "Anda tidak terhubung internet. Silahkan periksa koneksi anda");
      return null;
    }

  }

  delete(url: string, body?: any): Observable<any> {

    if (this.checkConnection()) {

      let reqOpts: any;

      if (this.localStorage.getItem("token")) {
        reqOpts = {
          body: body,
          headers: this.getHeaders()
        }
      }

      console.log(reqOpts);

      return this.http.delete<any>(this.BASE_URL + url, reqOpts)
        .pipe(
          catchError(
            (error: any, caught: Observable<HttpEvent<any>>) => {
              this.handlerResponseService.failedResponse(error);
              throw error;
            }
          ),
        );

    } else {
      //this.message.create("error", "Anda tidak terhubung internet. Silahkan periksa koneksi anda");
      return null;
    }

  }

  validate(url: string, body: any, reqOpts?: any): Observable<any> {

    if (this.checkConnection()) {

      const authHeaders = new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded" })
        .set("Content-Type", "application/x-www-form-urlencoded")
        .set("Authorization", "Basic " + btoa("kabarxxi-client-portal:VlVjNWVXUkhSbk5WZWs1cVkycE9NRWt3Um5waFJFVjVUVlJWTVUxcVdUSk5lbXQ1VFVSVk1VNW5QVDA9VlVjNWVXUkhSbk5WZWs1cVkycE9NRQ=="));
      reqOpts = { headers: authHeaders };
      let bodyUrl = new URLSearchParams()
      bodyUrl.set("username", body.username)
      bodyUrl.set("password", body.password)
      bodyUrl.set("grant_type", body.grant_type);
      return this.http.post<any>(this.BASE_URL + url, bodyUrl.toString(), reqOpts)
        .pipe(
          catchError(
            (error: any, caught: Observable<HttpEvent<any>>) => {
              this.handlerResponseService.failedResponse(error);
              throw error;
            }
          ),
        );

    } else {
      //this.message.create("error", "Anda tidak terhubung internet. Silahkan periksa koneksi anda");
      return null;
    }

  }

  checkConnection() {
    return navigator.onLine;
  }

  localStorageEncryt(enc: any) {
    enc = JSON.stringify(enc);
    let encrypted = CryptoJS.AES.encrypt(enc, cryptoKey);
    return encrypted.toString();
  }

  localStorageDecrypt(dec: string) {
    let decrypted = CryptoJS.AES.decrypt(dec, cryptoKey);
    let decryptedData = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
}
