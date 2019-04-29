import { Component, OnInit } from '@angular/core';
import { LamanBeritaService } from 'src/app/providers/page/laman-berita.service';

@Component({
  selector: 'app-laman-berita',
  templateUrl: './laman-berita.component.html',
  styleUrls: ['./laman-berita.component.scss']
})
export class LamanBeritaComponent implements OnInit {
  pokokBerita: string;
  loading: Boolean = false;
  detailBerita;
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

  constructor(
    private lamanBeritaService : LamanBeritaService
  ) { }

  ngOnInit() {
    this.getData();
    this.pokokBerita = "<div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><span style=\"color: blue;\">JAKARTA BARAT, KabarXXI.Com –</span>&nbsp;Kepala Suku Dinas (Kasudin) Pendidikan Wilayah II Jakarta Barat, Hj. Uripasih menggelar kegiatan pembinaan try out kepada Kepala Sekolah Dormauli Aisyah beserta para guru Kelas 6 Sekolah Dasar Negeri (SDN) Jelambar 08, di SDN Jelambar 08, Jalan Hadiah No.11-13, RT 7 RW 3, Kelurahan Jelambar, Kecamatan Grogol Petamburan, Jakarta Barat, Senin, 25 Maret 2019.</div><a name=\"more\" style=\"color: rgb(1, 111, 186); font-weight: bold; font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255);\"></a><br style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255);\"><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\">Pembinaan tersebut digelar sebagai persiapan sekaligus uji coba menjelang Ujian Sekolah Berstandar Nasional (USBN).&nbsp;</div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><br></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><i>\"Pembinaan dilakukan agar guru bisa memahami lingkup USBN.&nbsp; Sehingga bisa meningkatkan prestasi siswa,\" ujar Kasudin Pendidikan Wilayah II Jakarta Barat, Hj. Uripasih.</i></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><br></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\">Ia menjelaskan, pembinaan khusus ini digelar untuk persiapan USBN yang akan berlangsung bulan Mei nanti. Materi yang diberikan meliputi bedah kisi-kisi, pengembangan kisi-kisi dan penyusunan kisi-kisi praktek dan USBN.</div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><br></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\">Sementara itu, Kasatlak Pendidikan Kecamatan Grogol Petamburan, Susamsa memberikan pengarahan bagi para siswa SDN Jelambar 08 yang akan mengikuti USBN nanti.</div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><br></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><i>“Dalam mengerjakan soal harus cermat, teliti dan sungguh-sungguh, perhatikan arahan dan bimbingan dari Ibu/Bapak guru sehingga lebih berprestasi lagi,” ucapnya.</i></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><i><br></i></div><div class=\"separator\" style=\"float: none; max-width: 100%; height: auto; width: auto; margin: 0px auto -5px; text-align: center; color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); clear: both;\"><a href=\"https://3.bp.blogspot.com/-JV2mD-lqpxw/XJjKaRC4TxI/AAAAAAAAMfA/42hzjzEYTRYLiy3d8oQrGnJT_bYUfXdagCLcBGAs/s1600/try-out-sd-2.jpg\" imageanchor=\"1\" style=\"color: rgb(1, 111, 186); font-weight: bold; clear: left; float: left; margin-bottom: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"390\" data-original-width=\"780\" src=\"https://3.bp.blogspot.com/-JV2mD-lqpxw/XJjKaRC4TxI/AAAAAAAAMfA/42hzjzEYTRYLiy3d8oQrGnJT_bYUfXdagCLcBGAs/s1600/try-out-sd-2.jpg\" style=\"max-width: 100%; height: auto; width: auto; margin: 0px; padding: 0px;\"></a></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><i><br></i></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><i><br></i></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><i>“Untuk menjadi orang yang beruntung prestasi tahun ini harus lebih baik dari tahun kemarin, prestasi SDN Jelambar 08 tahun 2017 peringkat 1 kecamatan, tahun 2018 peringkat 2, usahakan tahun 2019 kembali ke peringkat 1,” himbau Kasatlak.</i></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><br></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\">Masih di tempat yang sama, Kepala Sekolah SDN Jelambar mengungkapkan harapannya.</div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><br></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><i>“Semoga dengan kegiatan try out&nbsp; ini pelaksanaan USBN di SDN Jelambar 08 dapat berjalan lancar serta para anak didik kami nantinya bisa meraih nilai yang memuaskan,” pungkas Kepsek SDN Jelambar 08, Dormauli Aisyah kepada awak media.</i></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\"><br></div><div style=\"color: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 13.5px; background-color: rgb(255, 255, 255); text-align: justify;\">Kegiatan try out, pembinaan dan pengarahan dari Kasudin Pendidikan II Wilayah Jakarta Barat di SDN Jelambar berlangsung aman, tertib dan lancar.&nbsp;<b>(M.Solichin)</b></div>";
  }

  getData() {
    this.lamanBeritaService.requestDataFromMultipleSources('170').subscribe(response => {
      this.detailBerita = response[0].data;
      console.log(this.detailBerita.data);
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
