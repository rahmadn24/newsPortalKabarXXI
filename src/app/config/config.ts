import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Config {
  public uat_server = "http://IDFLXSVRSIT02:8086/api/";
  public sit_server = "http://192.168.0.122:8081/";
  public local_server = "http://localhost:8181/api/";
  public prod_server = "http://IDFLXSVRSIT02:8086/api/";

  public readonly DEV_ENV = this.local_server;
  public readonly SIT_ENV = this.sit_server;
  public readonly UAT_ENV = this.uat_server;
  public readonly PROD_ENV = this.prod_server;
  public BASE_URL = this.DEV_ENV;

  constructor() {
  }
}