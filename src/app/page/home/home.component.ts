import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/providers/page/home.service';
import { Router } from '@angular/router';
import { Config } from 'src/app/config/config';
import { toNumber } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mostPopular = true;
  mainNewsData: any;
  videoData: any;
  latestNewsData: any;
  popularNewsData: any;

  collection = [];
  dataValue: any;
  dataValueLatest: any;
  pageLatest: number = 0;
  pageMain: number = 0;
  constructor(
    private homeService : HomeService,
    private router : Router,
    private config : Config
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.homeService.requestDataFromMultipleSources().subscribe(responseList => {
      this.videoData = responseList[0].data;
      this.popularNewsData = responseList[1].data;
    })
    this.getMainNews(0);
    this.getLatestNews(0);
  }

  getMainNews(param){
    let data = {
      page : param,
      size : 10,
      sort : 'CreatedDate,DESC'
    }
    this.homeService.getMainNews(data).subscribe(res => {
      this.mainNewsData = res.data;
      if(!this.dataValue){
        this.dataValue = res.count;
      }
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

  pageChangeMain(data){
    this.pageMain = data;
    this.getMainNews( data - 1 );
  }

  pageChangeLatest(data){
    this.pageLatest = data;
    this.getLatestNews( data - 1 );
  }

}
