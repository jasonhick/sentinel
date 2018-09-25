import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CONFIG } from '../../../config/sentinel.config';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  config: Object;
  product: string;
  title: string;
  subtitle: string;
  journeys: Object;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const config = CONFIG;
    this.route.params.subscribe(params => {
      this.product = params.product;
      this.title = config[this.product].title;
      this.subtitle = config[this.product].subtitle;
      this.journeys = config[this.product].journeys;
    });
  }
}
