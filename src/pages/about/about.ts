import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistePage } from '../registe/registe';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  notLogin:boolean = true;

  constructor(public navCtrl: NavController) {

  }

  loginCmd(){
    this.navCtrl.push(LoginPage);
  }

  registeCmd(){
    this.navCtrl.push(RegistePage);
  }

}
