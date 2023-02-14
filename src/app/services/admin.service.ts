import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";


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

  //Autenticando el Token
  public isAutenticated( allowRoles: string[]): boolean{

    const token = localStorage.getItem('token');


    if (!token) {
      return false;
    }


    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(token);

      //console.log(decodedToken);

      if (!decodedToken) {
        console.log("NO TIENE ACCESO");
        localStorage.removeItem('token')
        return false;
      }
    } catch (error) {
      localStorage.removeItem('token')
      return false;
    }
    return allowRoles.includes(decodedToken['role']);
  }



}
