import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { WINDOW } from '@ng-toolkit/universal';
import { Config } from '../../../config/config';
import { FooterService } from '../../../providers/page/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  dataBerita: any;
  image: any;

  constructor(@Inject(WINDOW) private window: Window,
    private router: Router,
    private foooterService: FooterService,
    private config: Config
  ) { }

  ngOnInit() {
    this.foooterService.requestDataFromMultipleSources().subscribe(res => {
      this.dataBerita = res[0].data;
      this.image = this.dataBerita.base64Image;
    });
  }

  laman(data) {
    this.window.scroll(0, 0);
    this.router.navigate([`laman/${data}`]);
  }

  getAt(data) {
    console.log(data);
    if (data == 'play') {
      setTimeout(() => {
        this.window.open(this.config.linkPlayStore, '_blank');
      }, 100);
    } else if (data == 'app') {
      setTimeout(() => {
        this.window.open(this.config.linkAppStore, '_blank');
      }, 100);
    }
  }

  follow(data) {
    console.log(data);
    if (data == 'facebook') {
      this.window.open(this.config.facebook, '_blank');
    } else if (data == 'twitter') {
      this.window.open(this.config.twitter, '_blank');
    } else if (data == 'youtube') {
      this.window.open(this.config.youtube, '_blank');
    } else if (data == 'instagram') {
      this.window.open(this.config.instagram, '_blank');
    }
  }
}
