import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WINDOW } from '@ng-toolkit/universal';
import { HomeService } from '../../providers/page/home.service';
import { Config } from '../../config/config';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {

  mostPopular = true;
  mainNewsData: any;
  videoData: any;
  latestNewsData: any;
  popularNewsData: any;

  collection = [];
  dataValue: any;
  dataValueLatest: any;
  pageMain: any;
  pageLatest: any;

  constructor(@Inject(WINDOW) private window: Window,
    private homeService: HomeService,
    private config: Config,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.getData();
    this.getLatestNews(0);
  }

  getMainNews(param) {

    let data1 = {
      page: param,
      size: 30,
      sort: 'CreatedDate,DESC'
    }
    this.homeService.searchResult(this.activeRoute.snapshot.paramMap.get('search'), data1).subscribe(res => {
      this.mainNewsData = res.data;
    });

  }
  getData() {
    let data = {
      page: 0,
      size: 10,
      sort: 'CreatedDate,DESC'
    }
    this.homeService.requestDataFromMultipleSources().subscribe(responseList => {
      this.videoData = responseList[0].data;
      console.log(this.videoData[0]);
      this.popularNewsData = responseList[1].data;
    })
  }

  getLatestNews(param) {
    let data = {
      page: param,
      size: 10,
      sort: 'CreatedDate,DESC'
    }
    this.homeService.getLatestNews(data).subscribe(res => {
      this.latestNewsData = res.data;
      if (!this.dataValueLatest) {
        this.dataValueLatest = res.count;
      }
    })
  }

  detailBerita(id, title) {
    this.window.scroll(0, 0);
    let titleDone = title.replace(/ /g, "-");
    titleDone = titleDone.replace(/\//g, "-");
    this.router.navigate([`laman-berita/berita/${id}/${titleDone}`]);
    console.log(id, title);
  }

  detailVideo(id, title) {
    this.window.scroll(0, 0);
    let titleDone = title.replace(/ /g, "-");
    titleDone = titleDone.replace(/\//g, "-");
    for (let i = 0; i < this.videoData.length; i++) {
      if (this.videoData[i].id == id) {
        this.homeService.videoData = this.videoData[i];
      };
    };
    this.router.navigate([`laman-berita/video/${id}/${titleDone}`]);
  }

  newsCategori(kategori) {
    this.router.navigate([`kategori/${kategori}`]);
  }

  pageChangeLatest(data) {
    this.pageLatest = data;
    this.getLatestNews(data - 1);
  }

  pageChangeMain(data) {
    this.pageMain = data;
    this.getMainNews(data - 1);
  }

}
