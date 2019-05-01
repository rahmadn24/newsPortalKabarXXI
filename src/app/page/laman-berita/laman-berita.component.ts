import { Component, OnInit } from '@angular/core';
import { LamanBeritaService } from 'src/app/providers/page/laman-berita.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute } from '@angular/router';
import { Config } from 'src/app/config/config';


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
  headlineNewsData = [
    {id : '1', image: '../../../assets/img/logoKabarxxi.png', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi fuga inventore et non alias odit, aperiam veniam itaque deserunt nisi animi tempore tenetur quaerat reprehenderit similique ab voluptas quis!'},
    {id : '2', image: '../../../assets/img/logoKabarxxi.png', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi fuga inventore et non alias odit, aperiam veniam itaque deserunt nisi animi tempore tenetur quaerat reprehenderit similique ab voluptas quis!'},
    {id : '3', image: '../../../assets/img/logoKabarxxi.png', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi fuga inventore et non alias odit, aperiam veniam itaque deserunt nisi animi tempore tenetur quaerat reprehenderit similique ab voluptas quis!'},
    {id : '4', image: '../../../assets/img/logoKabarxxi.png', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi fuga inventore et non alias odit, aperiam veniam itaque deserunt nisi animi tempore tenetur quaerat reprehenderit similique ab voluptas quis!'},
    {id : '5', image: '../../../assets/img/logoKabarxxi.png', title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi fuga inventore et non alias odit, aperiam veniam itaque deserunt nisi animi tempore tenetur quaerat reprehenderit similique ab voluptas quis!'}
  ];

  //komen
  inputValue: '';
  submitting : boolean = false;
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
  komentarBerita: any;
  imageBerita: any;
  category: any;

  constructor(
    private lamanBeritaService : LamanBeritaService,
    private ngxLoader: NgxUiLoaderService,
    private activeRoute: ActivatedRoute,
    private config: Config
  ) { }

  ngOnInit() {
    this.ngxLoader.start();
    this.titleBerita = this.activeRoute.snapshot.paramMap.get('title')
    this.getData();
  }

  getData() {
    this.lamanBeritaService.requestDataFromMultipleSources(this.activeRoute.snapshot.paramMap.get('id')).subscribe(response => {
      this.detailBerita = response[0].data;
      this.releaseDate = this.detailBerita.releaseDate;
      this.titleBerita = this.detailBerita.title;
      this.createdBy = this.detailBerita.createdBy;
      this.description = this.detailBerita.description;
      this.category = this.detailBerita.category.categoryName;
      this.imageBerita = this.config.fileSaverImage+this.detailBerita.base64Image;
      this.lamanBeritaService.getRelatedNews(this.detailBerita.keyword).subscribe(res => {
        this.relatedPost = res.data;
        setTimeout(() => {
          this.ngxLoader.stop();
        }, 3000);
      })
      this.komentarBerita = response[1].data;
    })
  }

  handleSubmit(){
    this.submitting = true;

    setTimeout(() => {
      this.inputValue = '';
      this.submitting = false;
    }, 3000);
  }

}
