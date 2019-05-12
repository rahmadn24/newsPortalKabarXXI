import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Config {
  public uat_server = "https://ilovelife.co.id/api/";
  public sit_server = "http://10.144.163.133:8181/api/";
  public local_server = "http://localhost:8181/api/";
  public prod_server = "http://IDFLXSVRSIT02:8086/api/";

  public readonly DEV_ENV = this.local_server;
  public readonly SIT_ENV = this.sit_server;
  public readonly UAT_ENV = this.uat_server;
  public readonly PROD_ENV = this.prod_server;
  public BASE_URL = this.DEV_ENV;
  public fileSaverImage = "http://localhost:1234/kabarxxi-uploads/data/image/";
  public fileSaverVideo = "http://localhost:1234/kabarxxi-uploads/data/video/";
  public linkPlayStore = "https://play.google.com/store/apps/details?id=com.wKabarXXI_7875180";
  public linkAppStore = "https://play.google.com/store/apps/details?id=com.wKabarXXI_7875180";

  constructor() {
  }
}