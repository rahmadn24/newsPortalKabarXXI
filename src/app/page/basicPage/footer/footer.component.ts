import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from 'src/app/providers/page/footer.service';
import { Config } from 'src/app/config/config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  dataBerita: any;
  image: any;

  constructor(
    private router: Router,
    private foooterService: FooterService,
    private config: Config
  ) { }

  ngOnInit() {
    this.foooterService.requestDataFromMultipleSources().subscribe(res => {
      this.dataBerita = res[0].data;
      this.image = this.dataBerita.base64Image;
    });
  }

  laman(data) {
    this.router.navigate([`laman/${data}`]);
  }

  getAt(data){
    console.log(data);
    if(data == 'play'){
        setTimeout(() => {
          window.open(this.config.linkPlayStore, '_blank');
        }, 100);
    }else if(data == 'app'){
      setTimeout(() => {
        window.open(this.config.linkAppStore, '_blank');
      }, 100);
  }
  }
}
