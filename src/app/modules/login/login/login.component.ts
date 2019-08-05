import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new Login();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginClicked(){
        this.userService.login(this.login.username, this.login.password).subscribe(result => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          if(error.errors) {

          }
        });
  }

  onSubmit(){}

}
