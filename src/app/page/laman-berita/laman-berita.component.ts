import { Component, OnInit } from '@angular/core';
import { LamanBeritaService } from 'src/app/providers/page/laman-berita.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config/config';
import { AuthService } from 'src/app/providers/auth/auth.service';

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
  komentarBerita =  [];
  imageBerita: any;
  category: any;
  latestNewsData: any;
  profile: any;
  dataProfile: any;
  username: any;
  no_hp: any;
  email: any;
  mainNewsData: any;

  constructor(
    private lamanBeritaService : LamanBeritaService,
    private ngxLoader: NgxUiLoaderService,
    private activeRoute: ActivatedRoute,
    private config: Config,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.titleBerita = this.activeRoute.snapshot.paramMap.get('title');
    this.getProfile();
    this.getData();
  }

  ngDoCheck(){
    if(localStorage.getItem("gen_token") && localStorage.getItem("gen_loginId")){
      if(this.username != atob(localStorage.getItem("gen_loginId"))){
        this.getProfile();
      }
    }else{
      this.profile = false;
    }
  }

  getProfile(){
    if(localStorage.getItem("gen_token") && localStorage.getItem("gen_loginId")){
      this.authService.getProfile(atob(localStorage.getItem("gen_loginId"))).subscribe(res => {
        console.log(res.data);
        this.dataProfile = res.data;
        this.username = this.dataProfile.username;
        this.no_hp = this.dataProfile.phoneNumber;
        this.email = this.dataProfile.email;
        this.profile = true;
      })
    }else{
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
      this.imageBerita = this.config.fileSaverImage+this.detailBerita.base64Image;
      this.lamanBeritaService.getRelatedNews(this.detailBerita.keyword).subscribe(res => {
        this.relatedPost = res.data;
      })
      this.komentarBerita = response[1].data;
      this.latestNewsData = response[2].data;
      this.mainNewsData = response[3].data;
    })
  }

  submitComent(){
    this.submitting = true;
    let data = {
      description : this.inputValue,
      newsId: this.detailBerita.id,
      userId: this.dataProfile.id
    };
    this.lamanBeritaService.createComment(data).subscribe(res =>{
      this.inputValue = '';
      this.submitting = false;
      this.getData();
      console.log(res);
    });
  }

  detailBeritaGo(id, title){
    let titleDone = title.replace(/ /g, "-");
    this.router.navigate([`laman-berita/${id}/${titleDone}`]);
    console.log(id, title);
  }

}
