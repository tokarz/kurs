import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpEnvService {

  constructor(private http: HttpClient) { 

  }

  public get(url, params?){
    return this.http.get(`${environment.apiUrl}/api/v1/users`, params);
  }
  
}
