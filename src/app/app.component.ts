import { Component, OnInit } from '@angular/core';

import { CONFIG } from '../config/sentinel.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: String;
  products: any;
  config: Object;

  constructor() {}

  ngOnInit() {
    this.title = 'My account';
    this.config = CONFIG;
    this.products = Object.keys(CONFIG);
    console.log(this.config);
  }
}
