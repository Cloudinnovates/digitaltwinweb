import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit, AfterViewInit {

  @ViewChild('onecell', { static: false }) onecell: ElementRef;

  constructor() { }

  oneCellWidth = 0;
  oneCellHeight = 0;

  cellWidth = 0;
  cellHeight = 0;



  chart1 = {
    type: 'Gauge',
    data: [
      ['Progress', 50]
    ],
    options: {
      greenFrom: 0,
      greenTo: 75,
      redFrom: 90,
      redTo: 100,
      yellowFrom: 75,
      yellowTo: 90,
      minorTicks: 5,
      backgroundColor: '#262626',
      redColor: '#f00',
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    }
  };

  chart2 = {
    type: 'Gauge',
    data: [
      ['Flow rate', 50]
    ],
    options: {
      greenFrom: 0,
      greenTo: 75,
      redFrom: 90,
      redTo: 100,
      yellowFrom: 75,
      yellowTo: 90,
      minorTicks: 5,
      backgroundColor: '#262626',
      redColor: '#000',
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    }
  };

  chart3 = {
    type: 'Gauge',
    data: [
      ['Network', 50]
    ],
    options: {
      greenFrom: 0,
      greenTo: 75,
      redFrom: 90,
      redTo: 100,
      yellowFrom: 75,
      yellowTo: 90,
      minorTicks: 5,
      backgroundColor: '#262626',
      redColor: '#000',
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    }
  };

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getCellDimentions();
    this.drawView();
  }
  drawView() {
    this.cellWidth = this.oneCellWidth - 20;
    this.cellHeight = this.oneCellHeight - 20;

    const gaugeSize = this.cellWidth - this.cellWidth / 4;
  }

  getCellDimentions() {
    this.oneCellWidth = this.onecell.nativeElement.offsetWidth;
    this.oneCellHeight = this.onecell.nativeElement.offsetHeight;

    console.log(this.oneCellWidth, this.oneCellHeight);
  }

}
