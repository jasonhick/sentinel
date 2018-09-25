import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CONFIG } from '../../../config/sentinel.config';
import { Questions } from '../../../config/questions/questions';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  config: Object;
  currentJourney: any;
  questions: Map<String, Object>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.config = CONFIG;
    this.questions = Questions;
    this.route.params.subscribe(params => {
      const { product, journey } = params;
      this.currentJourney = this.config[product].journeys[journey];
    });
  }
}
