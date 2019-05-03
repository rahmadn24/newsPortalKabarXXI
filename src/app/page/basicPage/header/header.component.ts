import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/providers/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisibleLogin = false;
  isVisibleRegister = false;
  isConfirmLoading = false;

  //auth
  username;
  password;

  validateFormLogin: FormGroup;
  validateFormRegister: FormGroup;
  profile: boolean;
  no_hp: any;
  email: any;
  dataProfile: any;

  constructor(
    private router : Router,
    private fb: FormBuilder,
    private message: NzMessageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getProfile();
    this.validateFormLogin = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    this.validateFormRegister = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      noHp: ['', [Validators.required, Validators.maxLength(13),Validators.minLength(9)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirm: ['', [this.confirmValidator]]
    });
  }

  authentication(){
      localStorage.removeItem("gen_token");
      localStorage.removeItem("gen_loginId");
      this.authService.auth({ username: this.username, password: this.password, grant_type: "password" }).subscribe(response => {
        localStorage.setItem("gen_token", response.access_token);
        localStorage.setItem("gen_loginId", btoa(this.username));
        this.isConfirmLoading = false;
        this.password = "";
        this.getProfile();
        this.handleCancel();
        this.message.create('success', `Login Sukses`);
      });
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

  logout(){
    localStorage.removeItem("gen_token");
    localStorage.removeItem("gen_loginId");
    this.getProfile();
  }

  imageBannerClick(){
    this.router.navigate(['']);
  }

  showModalLogin(){
    this.isVisibleLogin = true;
    this.isVisibleRegister = false;
  }

  showModalRegister(){
    this.isVisibleLogin = false;
    this.isVisibleRegister = true;
  }

  handleCancel(){
    this.isVisibleLogin = false;
    this.isVisibleRegister = false;
  }

  search(){
    console.log('done');
  }

  submitFormLogin(){
    this.isConfirmLoading = true;
    this.authentication();
  }

  submitFormRegister(data){
    this.isConfirmLoading = true;
    let register = 
    {
      email: this.email,
      password: this.password,
      phoneNumber: this.no_hp,
      username: this.username,
      roleId: 2
    };

    this.authService.register(register).subscribe(res => {
      if(res){
        this.isConfirmLoading = false;
        this.showModalLogin();
        this.message.create('success', res.message);
      }
    })
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateFormRegister.controls.confirm.updateValueAndValidity());
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateFormRegister.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

}
