import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { AuthService } from '../../../providers/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisibleLogin = false;
  isVisibleRegister = false;
  isVisibleDrawerMenu = false;
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
  searchValue: any;

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any,
    private router: Router,
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
      noHp: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  authentication() {
    this.localStorage.removeItem("gen_token");
    this.localStorage.removeItem("gen_loginId");
    this.authService.auth({ username: this.username, password: this.password, grant_type: "password" }).subscribe(response => {
      if (response) {
        this.localStorage.setItem("gen_token", response.access_token);
        this.localStorage.setItem("gen_loginId", btoa(this.username));
        this.isConfirmLoading = false;
        this.password = "";
        this.getProfile();
        this.handleCancel();
        this.message.create('success', `Login Sukses`);
      }
    });
    if (!this.localStorage.getItem("gen_token")) {
      this.isConfirmLoading = false;
      this.message.create('failed', `Login Gagal`);
    }
  }

  getProfile() {
    if (this.localStorage.getItem("gen_token") && this.localStorage.getItem("gen_loginId")) {
      this.authService.getProfile(atob(this.localStorage.getItem("gen_loginId"))).subscribe(res => {
        console.log(res.data);
        this.dataProfile = res.data;
        this.username = this.dataProfile.username;
        this.no_hp = this.dataProfile.phoneNumber;
        this.email = this.dataProfile.email;
        this.profile = true;
      })
    } else {
      this.profile = false;
      this.dataProfile = [];
      this.username = "";
      this.no_hp = "";
      this.email = "";
    }
  }

  logout() {
    this.localStorage.removeItem("gen_token");
    this.localStorage.removeItem("gen_loginId");
    this.getProfile();
  }

  openMenuDrawer() {
    this.isVisibleDrawerMenu = true;
  }

  closeDrawerMenu() {
    this.isVisibleDrawerMenu = false;
  }

  imageBannerClick() {
    this.router.navigate(['']);
  }

  showModalLogin() {
    this.isVisibleLogin = true;
    this.isVisibleRegister = false;
    this.isVisibleDrawerMenu = false;
  }

  showModalRegister() {
    this.isVisibleLogin = false;
    this.isVisibleRegister = true;
    this.isVisibleDrawerMenu = false;
  }

  handleCancel() {
    this.isVisibleLogin = false;
    this.isVisibleRegister = false;
  }

  submitFormLogin() {
    this.isConfirmLoading = true;
    this.authentication();
  }

  submitFormRegister(data) {
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
      if (res) {
        this.isConfirmLoading = false;
        this.showModalLogin();
        this.message.create('success', res.message);
      }
    })
  }

  newsCategori(kategori) {
    console.log(kategori)
    this.isVisibleDrawerMenu = false;
    this.router.navigate([`kategori/${kategori}`]);
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

  search() {
    if (this.searchValue) {
      this.router.navigate([`laman-berita/${this.searchValue}`]);
    }
  }

}
