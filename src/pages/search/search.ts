import { Component,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController,private platform:Platform,private elementRef:ElementRef) {
     platform.ready().then(() => {
     
     });
  }

  onCancle(){
    this.navCtrl.pop();
  }
}
