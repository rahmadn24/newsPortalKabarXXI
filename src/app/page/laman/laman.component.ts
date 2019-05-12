import { Component, OnInit } from '@angular/core';
import { LamanService } from 'src/app/providers/page/laman.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config/config';

@Component({
  selector: 'app-laman',
  templateUrl: './laman.component.html',
  styleUrls: ['./laman.component.scss']
})
export class LamanComponent implements OnInit {
  tag: string;
  tagData: any;
  description: any;
  image: any;

  constructor(
    private lamanService : LamanService,
    private activeRoute : ActivatedRoute,
    private config : Config,
    private router : Router
  ) { }

  ngOnInit() {
    this.tag = this.activeRoute.snapshot.paramMap.get('tag');
    console.log(this.tag);
    this.lamanService.getLamanTag(this.tag).subscribe(result => {
      console.log(result);
      this.tagData = result.data[0];
      this.image = this.config.fileSaverImage+this.tagData.base64Image;
      this.description = this.tagData.description;
    })
  }

  ngDoCheck(){
    if(this.tag !== this.activeRoute.snapshot.paramMap.get('tag')){
      this.ngOnInit();
    }
  }

}
