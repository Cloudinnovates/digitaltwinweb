import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { getError } from 'src/app/helpers/error.details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new Login();
  messages: string[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginClicked(){
    this.messages = [];

    this.userService.login(this.login.username, this.login.password).subscribe(result => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          if(error.errors) {
            this.messages = getError(error.errors);
          } else {
            this.messages.push('Something went wrong. Please try again later.');
          }
        });
  }

  onSubmit(){}

}
