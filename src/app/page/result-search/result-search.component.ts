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
  constructor(
    private homeService : HomeService,
    private router : Router,
    private config : Config,
    private activeRoute : ActivatedRoute
  ) { }

  ngOnInit() {

    this.homeService.searchResult(this.activeRoute.snapshot.paramMap.get('search')).subscribe(res => {
      this.mainNewsData = res.data;
    })
    this.getData();
  }

  getData(){
    this.homeService.requestDataFromMultipleSources().subscribe(responseList => {
      this.videoData = responseList[1].data;
      console.log(this.videoData[0]);
      this.latestNewsData = responseList[2].data;
      this.popularNewsData = responseList[3].data;
    })
  }

  detailBerita(id, title){
    let titleDone = title.replace(/ /g, "-");
    titleDone = titleDone.replace(/\//g, "-");
    this.router.navigate([`laman-berita/berita/${id}/${titleDone}`]);
    console.log(id, title);
  }

  detailVideo(id, title){
    let titleDone = title.replace(/ /g, "-");
    titleDone = titleDone.replace(/\//g, "-");
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

}
