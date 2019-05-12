import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/providers/page/home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Config } from 'src/app/config/config';

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
  dataValueLatest: any;
  pageLatest: any;
  constructor(
    private homeService : HomeService,
    private router : Router,
    private config : Config,
    private activeRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    let data1 = {
      page : 0,
      size : 30,
      sort : 'CreatedDate,DESC'
    }
    this.homeService.searchResult(this.activeRoute.snapshot.paramMap.get('search'), data1).subscribe(res => {
      this.mainNewsData = res.data;
    })
    this.getData();
    this.getLatestNews(0);
  }

  getData(){
    let data = {
      page : 0,
      size : 10,
      sort : 'CreatedDate,DESC'
    }
    this.homeService.requestDataFromMultipleSources().subscribe(responseList => {
      this.videoData = responseList[0].data;
      console.log(this.videoData[0]);
      this.popularNewsData = responseList[1].data;
    })
  }

  getLatestNews(param){
    let data = {
      page : param,
      size : 10,
      sort : 'CreatedDate,DESC'
    }
    this.homeService.getLatestNews(data).subscribe(res => {
      this.latestNewsData = res.data;
      if(!this.dataValueLatest){
        this.dataValueLatest = res.count;
      }
    })
  }

  detailBerita(id, title){
    window.scroll(0,0);
    let titleDone = title.replace(/ /g, "-");
    titleDone = titleDone.replace(/\//g, "-");
    this.router.navigate([`laman-berita/berita/${id}/${titleDone}`]);
    console.log(id, title);
  }

  detailVideo(id, title){
    window.scroll(0,0);
    let titleDone = title.replace(/ /g, "-");
    titleDone = titleDone.replace(/\//g, "-");
    for (let i = 0; i < this.videoData.length; i++) {
      if(this.videoData[i].id == id){
        this.homeService.videoData = this.videoData[i];
      };
    };
    this.router.navigate([`laman-berita/video/${id}/${titleDone}`]);
  }

  newsCategori(kategori){
    this.router.navigate([`kategori/${kategori}`]);
  }

  pageChangeLatest(data){
    this.pageLatest = data;
    this.getLatestNews( data - 1 );
  }

}
