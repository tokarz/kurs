import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  public isLoginSuccessfull = false;

  constructor(private readonly loginService: LoginService, private router: Router) { }
  
  ngAfterViewInit(): void {
    this.loginInputRef.nativeElement.focus();
  }

  public userEmail = '';
  public password = '';

  @ViewChild('loginInput') loginInputRef: ElementRef;

  ngOnInit() { }

  login() {
    this.loginService.get(this.userEmail, this.password)
      .subscribe((data) => {
        if (data?.users?.length > 0 && !!data?.users[0]?.name) {
          this.loginService.setIsAuthenticated(true);
          this.router.navigate(['restaurant']);
        } else {
          this.loginService.setIsAuthenticated(false);
        }
      });
  }

}
