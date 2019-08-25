import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WaterPumpComponent } from './water-pump/water-pump.component';
import { GaugeComponent } from './gauge/gauge.component';
import { PHIndicatorComponent } from './phindicator/phindicator.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: DashboardComponent,
    },
    {
      path: 'water',
      component: WaterPumpComponent,
    },
    {
      path: 'gauge',
      component: GaugeComponent,
    },
    {
      path: 'ph',
      component: PHIndicatorComponent,
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
