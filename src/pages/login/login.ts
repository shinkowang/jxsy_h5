import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { CommonService } from '../../service/commonService';

 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',  
  providers: [CommonService]
})
 
export class LoginPage {
  lg_username:any;
  lg_password:any;
  private httpService:Http;
  
  
  constructor(public navCtrl: NavController, http:Http,private storage: Storage,private commonService:CommonService) {
    this.httpService = http;
   
     
  }

  loginCmd(){
    this.commonService.doLogin(this.lg_username,this.lg_password);
  }

  loginOk() {

  }


}
