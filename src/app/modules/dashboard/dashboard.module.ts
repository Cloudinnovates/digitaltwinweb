import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterPumpComponent } from './water-pump/water-pump.component';
import { DataGraphComponent } from './data-graph/data-graph.component';
import { DashbordRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { GaugeComponent } from './gauge/gauge.component';
import { NavbarModule } from '../navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { PHIndicatorComponent } from './phindicator/phindicator.component';


@NgModule({
  declarations: [WaterPumpComponent, DataGraphComponent, DashboardComponent, GaugeComponent, PHIndicatorComponent],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    GoogleChartsModule,
    NavbarModule,
    RouterModule
  ]
})
export class DashboardModule { }
