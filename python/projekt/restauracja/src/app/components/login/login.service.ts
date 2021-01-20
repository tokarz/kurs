import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../../model/RestService';
import { Observable } from 'rxjs';
import { HttpEnvService } from '../http-env.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements RestService {
  private isAuthenticated = false;

  constructor(private http: HttpClient) { }
  get(username: string, password: string): Observable<any> {
    return this.http.get(`api/v1/users?username=${username}&password=${password}`);
  }

  setIsAuthenticated(is: boolean) {
    this.isAuthenticated = is;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }
}
