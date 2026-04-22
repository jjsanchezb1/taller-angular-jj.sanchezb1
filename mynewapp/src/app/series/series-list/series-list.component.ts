import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Series } from '../series';
//import { dataSeries } from '../data-series';
import { SeriesService } from '../series.service';

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

  constructor(
    private seriesService: SeriesService,
    private cdr: ChangeDetectorRef
  ) {}

  getSeriesList(): void {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
      console.log(this.series);
      this.cdr.detectChanges();
      if (this.series.length > 0) {
        this.selectedSeries = this.series[0];
      }
      this.calculateAverageSeasons();
      this.cdr.detectChanges();

    });
  }

  calculateAverageSeasons(): void {
    let totalSeasons = 0;
    this.series.forEach((serie) => {
      totalSeasons += serie.seasons;
    });

    if (this.series.length > 0) {
      this.averageSeasons = totalSeasons / this.series.length;
    } else {
      this.averageSeasons = 0;
    }
  }

  selectSeries(series: Series): void {
    this.selectedSeries = series;
  }

  ngOnInit(): void {
    this.getSeriesList();
  }
}