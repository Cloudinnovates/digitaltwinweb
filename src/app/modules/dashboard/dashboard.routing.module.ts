import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WaterPumpComponent } from './water-pump/water-pump.component';


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
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
