import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { dataSeries } from '../data-series';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css',
})
export class SeriesListComponent implements OnInit {
  series: Array<Series> = [];

  constructor() {}

  getSeriesList(): Array<Series> {
    return dataSeries;
  }

  ngOnInit() {
    this.series = this.getSeriesList();
  }
}

