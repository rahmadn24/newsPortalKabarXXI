import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Config {

  public readonly CONTEXT_PATH = 'http://202.157.176.44:8082/api/';

  public fileSaverImage = "http://202.157.176.44:8083/czNjcjN0dmlkZW8ta2FiYXJ4eGktcjRoNHMxNA/";
  public fileSaverVideo = "http://202.157.176.44:8083/cjRoNHMxNHZpZGVvLXMzY3IzdC1rYWJhcnh4aQ/";

  //PlayStore & AppStore
  public linkPlayStore = "https://play.google.com/store/apps/details?id=com.wKabarXXI_7875180";
  public linkAppStore = "https://play.google.com/store/apps/details?id=com.wKabarXXI_7875180";

  //Sosial Media
  public facebook = "http://facebook.com";
  public instagram = "http://instagram.com";
  public youtube = "http://youtube.com";
  public twitter = "http://twitter.com";

  constructor() {
  }
}