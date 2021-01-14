import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './model/RestService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService implements RestService {

  constructor(private http: HttpClient) { }
  get(...args: any[]): Observable<any> {
    return this.http.get('api/v1/users');
  }
}
