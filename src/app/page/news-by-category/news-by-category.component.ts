import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsByCategoryService } from 'src/app/providers/page/news-by-category.service';
import { Config } from 'src/app/config/config';

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
  constructor(
    private newsByCategoryService : NewsByCategoryService,
    private router : Router,
    private config : Config,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.kategori = this.activeRoute.snapshot.paramMap.get('kategori');
    this.getData();
  }

  ngDoCheck(){
    if(this.kategori){
      if(this.kategori !== this.activeRoute.snapshot.paramMap.get('kategori')){
        this.kategori = this.activeRoute.snapshot.paramMap.get('kategori');
        this.getData();
      }
    }
  }

  getData(){
    this.newsByCategoryService.requestDataFromMultipleSources(this.kategori).subscribe(responseList => {
      this.categoriNewsData = responseList[0].data;
      this.videoData = responseList[1].data;
      this.latestNewsData = responseList[2].data;
      this.popularNewsData = responseList[3].data;
    })
  }

  detailBerita(id, title){
    let titleDone = title.replace(/ /g, "-");
    this.router.navigate([`laman-berita/berita/${id}/${titleDone}`]);
    console.log(id, title);
  }

}
