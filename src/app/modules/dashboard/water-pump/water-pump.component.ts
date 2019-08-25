import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-water-pump',
  templateUrl: './water-pump.component.html',
  styleUrls: ['./water-pump.component.scss']
})
export class WaterPumpComponent implements OnInit, AfterViewInit {

  @ViewChild('waterContainer', { static: false }) waterContainer: ElementRef;

  viewWidth = 0;
  viewHeight = 0;
  noOfZones = 10;
  svg = document.getElementById('canvas');

  noOfRows = 0; // more than one 2 rows
  noOfColumns = 0; // motor + zones
  rowSpace = 0;
  columnSpace = 0;
  totalRowSpaces = 0;
  totalColumnSpaces = 0;

  boxWidth = 0;
  boxHeight = 0;

  columnPumpLinePointArray = new Array();
  rowUpPumpLinePointArray = new Array();
  rowDownPumpLinePointArray = new Array();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.svg = document.getElementById('canvas');
    this.getViewDimentions();
    this.defineGridSystem();
    this.drawPumpView();
  }

  getViewDimentions() {
    this.viewWidth = this.waterContainer.nativeElement.offsetWidth;
    this.viewHeight = this.waterContainer.nativeElement.offsetHeight;
  }

  defineGridSystem() {
    this.noOfRows = this.noOfZones > 1 ? 2 : 1; // more than one 2 rows
    this.noOfColumns = 1 + Math.ceil(this.noOfZones / 2); // motor + zones
    this.rowSpace = (this.viewHeight / this.noOfRows) * .1;
    this.columnSpace = (this.viewWidth / this.noOfColumns) * .1;
    this.totalRowSpaces = this.rowSpace * this.noOfRows * 2;
    this.totalColumnSpaces = (this.columnSpace * this.noOfColumns) + (2 * this.columnSpace);

    this.boxWidth = (this.viewWidth - this.totalColumnSpaces) / this.noOfColumns;
    this.boxHeight = (this.viewHeight - this.totalRowSpaces) / this.noOfRows;
  }
  
  drawPumpView() {
    const pumpYStart = this.noOfRows > 1 ? (this.rowSpace * 2) + this.boxHeight - this.boxHeight / 2 : this.rowSpace;

    this.drawPump(this.columnSpace, pumpYStart, this.boxWidth, this.boxHeight);

    const zoneXStart = this.columnSpace * 3 + this.boxWidth;

    for (let i = 0; i < this.noOfZones; i++) {
      const zoneRowIndex = i % 2 === 1 ? 1 : 0;
      const zoneColumnIndex = Math.floor(i / 2);

      this.drawFiled(i, zoneXStart + zoneColumnIndex * (this.boxWidth + this.columnSpace),
        (this.boxHeight + 4 * this.rowSpace) * zoneRowIndex,
        this.boxWidth, this.boxHeight);
    }

    this.drawPumpLines(pumpYStart);
    //this.pumpWaterToZone(1);
  }

  drawPump(x: number, y: number, width: number, height: number) {
    const newElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    newElement.setAttribute('width', width.toString());
    newElement.setAttribute('height', height.toString());
    newElement.setAttribute('x', x.toString());
    newElement.setAttribute('y', y.toString());
    newElement.style.stroke = '#000';
    newElement.style.strokeWidth = '2px';
    newElement.style.fill = 'pink';
    this.svg.appendChild(newElement);
  }

  drawFiled(fieldNumber: number, x: number, y: number, width: number, height: number) {
    const newElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newElement.setAttribute('width', width.toString());
    newElement.setAttribute('height', height.toString());
    newElement.setAttribute('x', x.toString());
    newElement.setAttribute('y', y.toString());

    const newElement1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    newElement1.setAttribute('width', width.toString());
    newElement1.setAttribute('height', height.toString());
    newElement1.setAttribute('x', '0');
    newElement1.setAttribute('y', '0');
    newElement1.style.stroke = '#000';
    newElement1.style.strokeWidth = '2px';
    newElement1.style.fill = 'green';

    newElement.append(newElement1);
    const fileText = this.getFildTextForFiled(fieldNumber, x, y, width, height);
    newElement.append(fileText);
    this.svg.appendChild(newElement);
  }

  getFildTextForFiled(fieldNumber: number, x: number, y: number, width: number, height: number) {

    const newElement = document.createElementNS('http://www.w3.org/2000/svg', "foreignObject");
    newElement.setAttribute('width', width.toString());
    newElement.setAttribute('height', height.toString());

    const div = document.createElement('div');
    div.innerHTML = `<div>
      <h3>title</h3>
      <div><b>prop name</b>: <span>value</span></div>
      <div><b>prop name</b>: <span>value</span></div>
    </div>
    `;

    newElement.appendChild(div);
    return newElement;

  }
  drawPumpLine(path: string, width: number, fill: string): SVGPathElement {
    const newElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    newElement.setAttribute('d', path);
    newElement.style.stroke = fill;
    newElement.style.fill = 'none';
    newElement.style.strokeWidth = width.toString();
    this.svg.appendChild(newElement);

    return newElement;
  }

  drawPumpLines(pumpYStart: number) {
    let columnPumpLineStartX = this.columnSpace + this.boxWidth;
    let columnPumpLineStartY = pumpYStart + this.boxHeight / 2;

    let columnPumpLineEndX = columnPumpLineStartX + this.columnSpace * 2 + ((this.noOfZones > 1) ? this.boxWidth / 2 : 0);
    let columnPumpLineEndY = columnPumpLineStartY;

    for (let i = 0; i < this.noOfColumns - 1; i++) {
      let line = `M${columnPumpLineStartX},${columnPumpLineStartY} ${columnPumpLineEndX},${columnPumpLineEndY}`;
      let lineWhite = line;
      this.columnPumpLinePointArray.push(line);

      let lastRawShift = 0
      if (this.noOfZones > 1 && i === this.noOfColumns - 2) {
        lastRawShift = 10;
        line = `M${columnPumpLineStartX},${columnPumpLineStartY} ${columnPumpLineEndX + lastRawShift},${columnPumpLineEndY}`;
        lineWhite = `M${columnPumpLineStartX},${columnPumpLineStartY} ${columnPumpLineEndX + lastRawShift - 2},${columnPumpLineEndY}`;
      }

      this.drawPumpLine(line, 20, '#000');
      this.drawPumpLine(lineWhite, 16, 'cornflowerblue');

      if (this.noOfZones > 1) {
        this.rowUpPumpLinePointArray
          .push(`M${columnPumpLineEndX},${columnPumpLineEndY - 8} ${columnPumpLineEndX},${columnPumpLineEndY - this.rowSpace / 2}`);
        if (!(i == this.noOfColumns - 2 && this.noOfZones % 2 === 1)) {
          this.rowDownPumpLinePointArray
            .push(`M${columnPumpLineEndX},${columnPumpLineEndY + 8} ${columnPumpLineEndX},${columnPumpLineEndY + this.rowSpace / 2}`);
        }
      }

      columnPumpLineStartX = columnPumpLineEndX;
      columnPumpLineStartY = columnPumpLineEndY;

      columnPumpLineEndX = columnPumpLineStartX + this.boxWidth + this.columnSpace;
      columnPumpLineEndY = columnPumpLineStartY;
    }

    this.rowDownPumpLinePointArray.forEach(path => {
      this.drawPumpLine(path, 20, '#000');
      this.drawPumpLine(path, 16, 'cornflowerblue');
    });

    this.rowUpPumpLinePointArray.forEach(path => {
      this.drawPumpLine(path, 20, '#000');
      this.drawPumpLine(path, 16, 'cornflowerblue');
    });

  }

  pumpWaterToZone(zoneNumber: number) {
    const zoneRowIndex = zoneNumber % 2 === 1 ? 1 : 0;
    const zoneColumnIndex = Math.ceil(zoneNumber / 2) - 1;

    let line = '';
    for (let i = 0; i <= zoneColumnIndex; i++) {
      line += (i === 0) ? this.columnPumpLinePointArray[i] : ' ' + this.columnPumpLinePointArray[i].replace('M', '');
    }
    if (this.noOfZones > 1) {
      if (zoneRowIndex === 0) {
        line += ' ' + this.rowDownPumpLinePointArray[zoneColumnIndex].replace('M', '');
      } else {
        line += ' ' + this.rowUpPumpLinePointArray[zoneColumnIndex].replace('M', '');
      }
    }
    const pumpPath = this.drawPumpLine(line, 2, 'none');

    const curveLength = pumpPath.getTotalLength();
    const numOfPoints = curveLength / 30;
    let counter = 0;
    for (let i = 0; i < numOfPoints; i++) {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('width', '10');
      rect.setAttribute('height', '10');
      rect.setAttribute('class', 'drop');
      rect.style.fill = 'blue';
      this.svg.appendChild(rect);
      counter += 50;
    }

    let shift = 0;
    const drops = document.getElementsByClassName('drop');

    function moveDrops() {

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        drop.setAttribute('transform', 'translate(' + (pumpPath.getPointAtLength(i * 30 + shift).x - 5) + ',' +
          (pumpPath.getPointAtLength(i * 30 + shift).y - 5) + ')');
      }

      shift += 5;
      if (shift == 30) {
        shift = 0
      }

      setTimeout(() => {
        requestAnimationFrame(moveDrops);
      }, 100);
    }

    requestAnimationFrame(moveDrops);

  }

}
