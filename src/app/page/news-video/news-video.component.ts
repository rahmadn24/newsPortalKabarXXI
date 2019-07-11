import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { HomeService } from '../../providers/page/home.service';
import { Router } from '@angular/router';
import { Config } from '../../config/config';

@Component({
  selector: 'app-news-video',
  templateUrl: './news-video.component.html',
  styleUrls: ['./news-video.component.scss']
})
export class NewsVideoComponent implements OnInit {

  videoData: any;
  dataValue = 0;
  pageVideo: number = 0;

  constructor(@Inject(WINDOW) private window: Window,
    private homeService: HomeService,
    private router: Router,
    private config: Config
  ) { }

  ngOnInit() {
    this.getVideoNews(0);
  }

  getVideoNews(page) {

    let params = {
      page: page,
      size: 8,
      sort: 'CreatedDate,DESC'
    };

    this.homeService.getVideoNews(params).subscribe(response => {
      this.videoData = response.data;
      this.dataValue = response.count;
    });
  }

  detailVideo(id, title, image) {

    this.window.scroll(0, 0);
    let titleDone = title.replace(/ /g, "-");
    titleDone = titleDone.replace(/\//g, "-");
    for (let i = 0; i < this.videoData.length; i++) {
      if (this.videoData[i].id == id) {
        this.homeService.videoData = this.videoData[i];
      };
    };

    this.router.navigate([`laman-berita/video/${id}/${titleDone}/${image}`]);
  }

  newsCategori(kategori) {
    this.router.navigate([`kategori/${kategori}`]);
  }

  pageChangeVideo(page) {
    this.pageVideo = page;
    this.getVideoNews(page - 1);
  }

}
