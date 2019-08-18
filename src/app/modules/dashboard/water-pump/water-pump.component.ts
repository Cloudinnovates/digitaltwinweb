import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-water-pump',
  templateUrl: './water-pump.component.html',
  styleUrls: ['./water-pump.component.scss']
})
export class WaterPumpComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    for (let i = 0; i < 2; i++) {
      const box = document.getElementsByClassName('box')[0];
      const boxClone = box.cloneNode(true) as HTMLElement;
      boxClone.setAttribute('id', '1' + i)
      const canvas = document.getElementById('canvas');
      canvas.appendChild(boxClone);
    }


    const newDiv = document.getElementById('11') as HTMLElement;
    newDiv.setAttribute('y', '500')
    newDiv.addEventListener('click', (event: Event) => {
      this.clickThis(event);
    });
  }

  clickThis(ele) {
    alert('1');
  }

}
