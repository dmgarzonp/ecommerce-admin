import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { GLOBAL } from "./GLOBAL";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public url;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }


  listarClientesFiltraAdmin(tipo, filtro): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get( this.url + '/listarClientesFiltraAdmin/' + tipo + '/' + filtro,{headers:headers});
  }

}
