import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ConstService } from './constService';
import { Http } from '@angular/http';

@Injectable()
export class CommonService {

    constructor(private storage:Storage,private http:Http,public navCtrl: NavController) {
        
    }

    //判断是否登录
    hasLogin() {
        let login_id = this.storage.get(ConstService.LOGIN_ID);
        if (login_id){
            return true;
        } else {
            return false;
        }
    }

    //设置值
    setStorgeVal(key:string,value:any) {
        this.storage.set(key,value);
    }

    getStorgeVal(key:string) {
        return this.storage.get(key);
    }

    getCurrentUser(){
        
    }

    //登录系统
    doLogin(account:string, member_password:string)
    {
        this.http.post(ConstService.API_URL+ConstService.API_LOGIN,{"account":account,"member_password":member_password}).map(
            res=>res.json()
        ).subscribe(
            result=>{
                if (result.login_status && result.login_status == "0"){
                    result.result.userInfo
                    this.navCtrl.pop();
                } else {
                    alert("error");
                }
            }
        )
    }


}