import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  constructor(public navCtrl: NavController,public toastCtrl:ToastController) {

  }

  addToCart() {
    let toast = this.toastCtrl.create({
      message:'加入购物车成功！',
      duration:1000
    });
    toast.present();
  }

  addToFav() {
    let toast = this.toastCtrl.create({
      message:'收藏成功！',
      duration:1000
    });
    toast.present();
  }

}
