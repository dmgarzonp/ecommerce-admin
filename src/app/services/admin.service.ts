import { Injectable } from '@angular/core';
import { Observable, observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { GLOBAL } from "./GLOBAL";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public url;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  loginAdmin(data): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/loginAdmin', data, {headers:headers});
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
