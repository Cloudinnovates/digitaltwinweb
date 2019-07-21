import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './modules/login/login.module#LoginModule'
      }
    ]
  },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
      }
    ]
  },
  {
    path: 'settings',
    children: [
      {
        path: '',
        loadChildren: './modules/settings/settings.module#SettingsModule',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
