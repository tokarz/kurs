import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isLoginSuccessfull = false;

  constructor(private readonly loginService: LoginService, private router: Router) { }

  ngOnInit() { }

  login() {
    this.loginService.get('username', 'password')
      .subscribe((data) => {
        if (data?.users?.length > 0) {
          this.router.navigate(['restaurant']);
        }
      });
  }

}
