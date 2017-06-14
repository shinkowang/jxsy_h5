import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  activeMenu: string;

  constructor(public navCtrl: NavController) {
     
  }

  openDetail(){
    this.navCtrl.push(DetailPage);
  }

}
