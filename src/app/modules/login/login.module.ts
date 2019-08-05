import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login.routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    NavbarModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
