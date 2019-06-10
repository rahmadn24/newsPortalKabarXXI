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
  public linkPlayStore = "https://play.google.com/store/apps/details?id=com.kabarxxi.apps";
  public linkAppStore = "https://play.google.com/store/apps/details?id=om.kabarxxi.apps";

  //Sosial Media
  public facebook = "https://web.facebook.com/kabarXXI/";
  public instagram = "https://www.instagram.com/kabar.dua.satu/";
  public youtube = "https://www.youtube.com/channel/UCbj-iBl4rLKzrYcuXhbJQfQ";
  public twitter = "https://twitter.com/XxiKabar";

  constructor() {
  }
}