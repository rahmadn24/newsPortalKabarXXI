import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/providers/page/home.service';
import { Router } from '@angular/router';
import { Config } from 'src/app/config/config';

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
      console.log(responseList[0].data);
      this.mainNewsData = responseList[0].data;
      this.videoData = responseList[1].data;
      this.latestNewsData = responseList[2].data;
      this.popularNewsData = responseList[3].data;
    })
  }

  detailBerita(id, title){
    let titleDone = title.replace(/ /g, "-");
    this.router.navigate([`laman-berita/${id}/${titleDone}`]);
    console.log(id, title);
  }

  newsCategori(kategori){
    this.router.navigate([`kategori/${kategori}`]);
  }

}
