import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class ConnectionBackofficeService {
  private _serverURL: string ;
  private _menuListFormsURI: undefined|string = 'assets/docs/file-services.json';
  /**
   * Constructor : initialization of key token
   * @param _http
   * @param _router
   * @param _route
   */
  constructor(private _http: Http,
              private _router: Router,
              private _route: ActivatedRoute,
  ) {}

  /**
   * Set the Header for first connection of backoffice
   * @return {Headers}
   */
  private setCustomHeader() {
    this._serverURL = environment.boBaseURL;

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return headers;
  }



  /**
   * Get List Forms
   * @param data
   * @returns {Observable<R|T>}
   */
  getMenuListForms() {
    let options = new RequestOptions({ headers: this.setCustomHeader()});
    return this._http.get(this._menuListFormsURI, options)
      .filter(v => v.status === 200)
      .map(this.extractData)
      .catch((error) => this.handleError(error));
  }

  /**
   * Extract responce of api request
   * @param res
   * @return {any|{}}
   */
  private extractData(res: Response) {
    console.log(Response);
    return  res.json() || {};
  }

  /**
   * error message handling
   * @param error
   * @return {any}
   */
  private handleError (error: Response | any) {
    /**
     * switch mode prod or dev
     */

    if (!environment.production) {
      let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText || ''}` : 'Server error';
      console.error(errMsg);
      return Observable.throw({ status: error.status, body : error.json() || {} });
    }else {
      /**
       * message error
       */
      console.error(error);
      return Observable.throw({ status: error.status, body : error.json() || {} });
    }

  }

}
