import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LOCAL_STORAGE, WINDOW } from '@ng-toolkit/universal';
import { LamanBeritaService } from '../../providers/page/laman-berita.service';
import { Config } from '../../config/config';
import { AuthService } from '../../providers/auth/auth.service';
import { HomeService } from '../../providers/page/home.service';
import { NewsService } from '../../providers/page/news.service';

@Component({
  selector: 'app-laman-berita',
  templateUrl: './laman-berita.component.html',
  styleUrls: ['./laman-berita.component.scss']
})
export class LamanBeritaComponent implements OnInit {
  pokokBerita: string;
  loading: Boolean = false;
  detailBerita;
  relatedPost;

  //komen
  inputValue: '';
  submitting: boolean = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };

  komentarData = [
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: new Date()
    },
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: new Date()
    }
  ];
  releaseDate: any;
  titleBerita: any;
  createdBy: any;
  description: any;
  komentarBerita = [];
  imageBerita: any;
  category: any;
  latestNewsData: any;
  profile: any;
  dataProfile: any;
  username: any;
  no_hp: any;
  email: any;
  mainNewsData: any;
  titleBeritaRoute: string;
  type: string;
  dataValue: any;
  dataValueLatest: any;
  pageMain: any;
  pageLatest: any;
  views: any;

  constructor(@Inject(WINDOW) private window: Window, @Inject(LOCAL_STORAGE) private localStorage: any,
    private lamanBeritaService: LamanBeritaService,
    private activeRoute: ActivatedRoute,
    private config: Config,
    private authService: AuthService,
    private router: Router,
    private homeService: HomeService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    if (this.activeRoute.snapshot.paramMap.get('type') == 'berita') {
      this.titleBeritaRoute = this.activeRoute.snapshot.paramMap.get('title');
      this.type = 'berita';
      this.getProfile();
      this.getData();
      this.newsService.addViews(this.activeRoute.snapshot.paramMap.get('id')).subscribe(res => {
        console.log(res);
      })
    } else {
      this.titleBeritaRoute = this.activeRoute.snapshot.paramMap.get('title');
      this.type = 'video';
      this.getProfile();
      this.getData2();
    }

    this.getMainNews(0);
    this.getLatestNews(0);
  }

  ngDoCheck() {
    if (this.localStorage.getItem("gen_token") && this.localStorage.getItem("gen_loginId")) {
      if (this.username != atob(this.localStorage.getItem("gen_loginId"))) {
        this.getProfile();
      }
    } else {
      this.profile = false;
    }

    if (this.titleBeritaRoute) {
      if (this.titleBeritaRoute !== this.activeRoute.snapshot.paramMap.get('title')) {
        this.titleBeritaRoute = this.activeRoute.snapshot.paramMap.get('title')
        this.ngOnInit();
      }
    }
  }

  getProfile() {
    if (this.localStorage.getItem("gen_token") && this.localStorage.getItem("gen_loginId")) {
      this.authService.getProfile(atob(this.localStorage.getItem("gen_loginId"))).subscribe(res => {
        console.log(res.data);
        this.dataProfile = res.data;
        this.username = this.dataProfile.username;
        this.no_hp = this.dataProfile.phoneNumber;
        this.email = this.dataProfile.email;
        this.profile = true;
      })
    } else {
      this.profile = false;
      this.dataProfile = [];
      this.username = "";
      this.no_hp = "";
      this.email = "";
    }
  }

  getData() {
    this.lamanBeritaService.requestDataFromMultipleSources(this.activeRoute.snapshot.paramMap.get('id')).subscribe(response => {
      this.detailBerita = response[0].data;
      this.releaseDate = this.detailBerita.releaseDate;
      this.titleBerita = this.detailBerita.title;
      this.createdBy = this.detailBerita.createdBy;
      this.description = this.detailBerita.description;
      this.category = this.detailBerita.category.categoryName;
      this.views = this.detailBerita.views;
      this.imageBerita = this.config.fileSaverImage + this.detailBerita.base64Image;
      this.lamanBeritaService.getRelatedNews(this.detailBerita.keyword).subscribe(res => {
        this.relatedPost = res.data;
      })
      this.komentarBerita = response[1].data;
    })
  }

  getData2() {
    this.homeService.requestDataFromMultipleSources().subscribe(response => {
      this.detailBerita = this.homeService.videoData;
      console.log(this.detailBerita);
      this.releaseDate = this.detailBerita.createdDate;
      this.titleBerita = this.detailBerita.title;
      this.description = this.detailBerita.description;
      this.category = this.detailBerita.title;
      this.views = this.detailBerita.views;
      this.imageBerita = this.config.fileSaverVideo + this.detailBerita.base64Video;
    })
  }

  getMainNews(param) {
    let data = {
      page: param,
      size: 10,
      sort: 'CreatedDate,DESC'
    }
    this.homeService.getMainNews(data).subscribe(res => {
      this.mainNewsData = res.data;
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
    this.homeService.getLatestNews(data).subscribe(res => {
      this.latestNewsData = res.data;
      if (!this.dataValueLatest) {
        this.dataValueLatest = res.count;
      }
    })
  }

  submitComent() {
    this.submitting = true;
    let data = {
      description: this.inputValue,
      newsId: this.detailBerita.id,
      userId: this.dataProfile.id
    };
    this.lamanBeritaService.createComment(data).subscribe(res => {
      this.inputValue = '';
      this.submitting = false;
      this.getData();
      console.log(res);
    });
  }

  detailBeritaGo(id, title) {
    this.window.scroll(0, 0);
    let titleDone = title.replace(/ /g, "-");
    titleDone = titleDone.replace(/\//g, "-");
    this.router.navigate([`laman-berita/berita/${id}/${titleDone}`]);
    // this.getData();
  }

  newsCategori(kategori) {
    this.router.navigate([`kategori/${kategori}`]);
  }

  pageChangeMain(data) {
    this.pageMain = data;
    this.getMainNews(data - 1);
  }

  pageChangeLatest(data) {
    this.pageLatest = data;
    this.getLatestNews(data - 1);
  }

  follow(data) {
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
