import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/providers/page/home.service';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  headlineNewsData = [
    {id : '1', image: '../../../assets/img/logoKabarxxi.png'},
    {id : '2', image: '../../../assets/img/logoKabarxxi.png'},
    {id : '3', image: '../../../assets/img/logoKabarxxi.png'},
    {id : '4', image: '../../../assets/img/logoKabarxxi.png'},
    {id : '5', image: '../../../assets/img/logoKabarxxi.png'}
  ]
  mostPopular = true;
  constructor(
    private homeService : HomeService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.homeService.requestDataFromMultipleSources().subscribe(responseList => {
      console.log(responseList[0]);
    })
  }

  detailBerita(data){
    this.router.navigate(['laman-berita']);
    console.log(data);
  }

}
