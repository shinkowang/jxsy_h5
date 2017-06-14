import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ProductPage } from '../product/product';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductPage;
  tab3Root = CartPage;
  tab4Root = AboutPage;
  constructor() {

  }
}
