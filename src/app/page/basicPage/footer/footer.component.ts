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

  dataAdvertiser = [];
  countAdvertiser = 0;
  pageAdvertiser = 0;

  constructor(@Inject(WINDOW) private window: Window,
    private router: Router,
    private foooterService: FooterService,
    private config: Config
  ) { }

  ngOnInit() {
    this.getAdvertiserData(0);
  }

  getAdvertiserData(page) {

    let params = {
      page: page,
      size: 8,
      sort: 'CreatedDate,DESC'
    };

    this.foooterService.getAdvertiser(params).subscribe(res => {
      this.dataAdvertiser = res.data;
      this.countAdvertiser = res.count;
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
    this.window.open(this.config[data], '_blank');
  }

  changePageAdvertiser(page) {
    this.pageAdvertiser = page;
    this.getAdvertiserData(page - 1);
  }

}
