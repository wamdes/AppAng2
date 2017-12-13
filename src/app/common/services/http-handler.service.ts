import { Injectable } from '@angular/core';
import {Http,Response ,Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
//import{environnement} from 'environnements/environnement';
@Injectable()
export class HttpHandlerService {

  constructor(private _http:Http) { }

  /*customHeader(){
    let headers = new Headers;
headers.append('content-Type','application/json')
let accessToken = '';
//recuperer le token de la session
headers.append(Authorization, bearer ${accessToken})
return headers
}*/
}
