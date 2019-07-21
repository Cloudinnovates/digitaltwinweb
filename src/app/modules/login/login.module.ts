import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login.routing.module';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NavbarModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
