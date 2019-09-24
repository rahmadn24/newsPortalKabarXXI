import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WINDOW } from '@ng-toolkit/universal';
import { NewsByCategoryService } from '../../providers/page/news-by-category.service';
import { Config } from '../../config/config';
import { HomeService } from '../../providers/page/home.service';

@Component({
  selector: 'app-news-by-category',
  templateUrl: './news-by-category.component.html',
  styleUrls: ['./news-by-category.component.scss']
})
export class NewsByCategoryComponent implements OnInit {

  videoData: any;
  latestNewsData: any;
  popularNewsData: any;
  categoriNewsData: any;
  kategori: string;
  dataValue: any;
  dataValueLatest: any;
  pageMain: any;
  pageLatest: any;
  constructor(@Inject(WINDOW) private window: Window,
    private newsByCategoryService: NewsByCategoryService,
    private router: Router,
    private config: Config,
    private activeRoute: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.kategori = this.activeRoute.snapshot.paramMap.get('kategori');
    this.getData();
  }

  ngDoCheck() {
    if (this.kategori) {
      if (this.kategori !== this.activeRoute.snapshot.paramMap.get('kategori')) {
        this.kategori = this.activeRoute.snapshot.paramMap.get('kategori');
        this.getData();
      }
    }
  }

  getData() {
    this.newsByCategoryService.requestDataFromMultipleSources().subscribe(responseList => {
      this.videoData = responseList[0].data;
      this.popularNewsData = responseList[1].data;
    })
    this.pageMain = 0;
    this.pageLatest = 0;
    this.getMainNews(0);
    this.getLatestNews(0);
  }

  getMainNews(param) {
    let data = {
      page: param,
      size: 10,
      sort: 'CreatedDate,DESC'
    }
    this.newsByCategoryService.getNewsByCategory(this.kategori, data).subscribe(res => {
      this.categoriNewsData = res.data;
      if (!this.dataValue) {
        this.dataValue = res.count;
      }
    })
  }

  getLatestNews(param) {
    let data = {
      page: param,
      size: 10,
      sort: 'CreatedDate,DESC'
    }
    this.newsByCategoryService.getLatestNews(data).subscribe(res => {
      this.latestNewsData = res.data;
      if (!this.dataValueLatest) {
        this.dataValueLatest = res.count;
      }
    })
  }

  detailBerita(id, title, image) {
    this.window.scroll(0, 0);
    let titleDone = title.replace(/ /g, "-");
    titleDone = titleDone.replace(/\//g, "-");
    this.router.navigate([`laman-berita/berita/${id}/${titleDone}/${image}`]);
    console.log(id, title);
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

  listVideo() {
    this.router.navigate(['laman-video']);
  }

  pageChangeMain(data) {
    this.pageMain = data;
    this.getMainNews(data - 1);
  }

  pageChangeLatest(data) {
    this.pageLatest = data;
    this.getLatestNews(data - 1);
  }

}
