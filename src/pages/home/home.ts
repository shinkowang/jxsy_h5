import { Component,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private elementRef:ElementRef) {

  }
 
  

  onFocus(ev:any) {
      this.navCtrl.push(SearchPage);
  }

  

}
