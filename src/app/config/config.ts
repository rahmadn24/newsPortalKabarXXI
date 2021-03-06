import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Config {

  public readonly CONTEXT_PATH = '/api/';

  public fileSaverImage = "/czNjcjN0dmlkZW8ta2FiYXJ4eGktcjRoNHMxNA/";
  public fileSaverVideo = "/cjRoNHMxNHZpZGVvLXMzY3IzdC1rYWJhcnh4aQ/";

  //PlayStore & AppStore
  public linkPlayStore = "https://play.google.com/store/apps/details?id=com.kabarxxi.apps";
  public linkAppStore = "https://apps.apple.com/us/app/kabarxxi/id1467860358";

  //Sosial Media
  public facebook = "https://web.facebook.com/kabarXXI/";
  public instagram = "https://www.instagram.com/kabar.dua.satu/";
  public youtube = "https://www.youtube.com/channel/UCbj-iBl4rLKzrYcuXhbJQfQ";
  public twitter = "https://twitter.com/XxiKabar";

  constructor() {
  }
}
