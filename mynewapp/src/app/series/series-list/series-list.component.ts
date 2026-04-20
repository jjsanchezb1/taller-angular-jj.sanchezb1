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
  selectedSeries!: Series;
  averageSeasons: number = 0;

  constructor() {}

  getSeriesList(): Array<Series> {
    return dataSeries;
  }

  calculateAverageSeasons(): number {
    if (this.series.length === 0) {
      return 0;
    }

    const totalSeasons = this.series.reduce(
      (sum, currentSeries) => sum + currentSeries.seasons, 0);

    return totalSeasons / this.series.length;
  }

  selectSeries(series: Series): void {
    this.selectedSeries = series;
  }

  ngOnInit(): void {
    this.series = this.getSeriesList();
    this.averageSeasons = this.calculateAverageSeasons();

    if (this.series.length > 0) {
      this.selectedSeries = this.series[0];
    }
  }
}