import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';
// import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandlerResponseService {

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private router: Router) { }

  public successResponse(response: { status: any; message: string; }) {

    switch (response.status) {

      case StatusCode.SUCCESS:
        console.log(response);
        //this.message.create("success", response.message);
        break;

    }

    return response;
  }

  public failedResponse(error: { status: any; }) {

    switch (error.status) {

      case StatusCode.UNAUTHORIZED:
        // go to login
        this.localStorage.removeItem("token");
        this.localStorage.removeItem("profile");
        this.router.navigate(['/login']);
        break;

      case StatusCode.FORBIDDEN:
        // show dialog
        this.router.navigate(['/login']);
        //this.message.create("error", "Mohon maaf saat anda belum bisa akses web ini");
        break;

      case StatusCode.BAD_REQUEST:
        // show dialog
        //this.message.create("error", "Mohon maaf terjadi kesalahan saat request data");
        break;

      case StatusCode.SERVER_ERROR:
        // show dialog
        //this.message.create("error", "Mohon maaf server sedang tidak bisa di akses");
        break;

    }

    return of(error);
  }
}

export enum StatusCode {
  UNAUTHORIZED = 401,
  FORBIDDEN = 503,
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
  SUCCESS = 200
}
