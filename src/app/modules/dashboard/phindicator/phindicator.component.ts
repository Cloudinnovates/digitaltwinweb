import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phindicator',
  templateUrl: './phindicator.component.html',
  styleUrls: ['./phindicator.component.scss']
})
export class PHIndicatorComponent implements OnInit {
  phLevel: number;
  phLevelToHeight: string;
  constructor() { 
    this.phLevel = 7.5;
    this.phLevelToHeight = this.getHeightForPhLevel().toString();
  }
  attr = { y : 90 };

  ngOnInit() {
  }

  getHeightForPhLevel(): number {
    return (this.phLevel * 300) / 14;
  }

}
