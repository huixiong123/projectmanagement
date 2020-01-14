import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, catchError, filter, switchMap} from 'rxjs/operators';
import {StorageService} from './storage.service';
import {HttpRouterService} from './http-router.service';
import {Router} from '@angular/router';
import { ComponentService } from './component.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _storage: StorageService,
    private _httpRouter: HttpRouterService,
    private _router: Router,
    private _http: HttpClient,
    private _componentService: ComponentService,
  ) {}

  private _filterEvent(res) {
    return res;
  }

  private _handleError(err) {
    this._componentService.message({ data: err.error.info[0].message });
    return err;
  }

  private _headersConfig() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic emFhc2RqZndlcmlvdXY6emFhc2RqZndlcmlvdXY=',
         // 'access_token':this._storage.getSession('access_token') || ''
      })
    };
  }
  private _headersUpload() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Basic emFhc2RqZndlcmlvdXY6emFhc2RqZndlcmlvdXY=',
        // 'access_token':this._storage.getSession('access_token') || ''
      })
    };
  }

  get(url: string): Observable<any> {
    return this._http.get(url, this._headersConfig()).pipe(
      map(res => this._filterEvent(res)),
      catchError(err => this._handleError(err))
    );
  }

  post(url: string, body: Object): Observable<any> {
    return this._http.post(url, body, this._headersConfig()).pipe(
      map(res => this._filterEvent(res)),
      catchError(err => this._handleError(err))
    );
  }

  patch(url: string, body: Object): Observable<any> {
    return this._http.patch(url, body, this._headersConfig()).pipe(
      map(res => this._filterEvent(res)),
      catchError(err => this._handleError(err))
    );
  }

  put(url: string, body: Object): Observable<any> {
    return this._http.put(url, body, this._headersConfig()).pipe(
      map(res => this._filterEvent(res)),
      catchError(err => this._handleError(err))
    );
  }

  delete(url: string): Observable<any> {
    return this._http.delete(url, this._headersConfig()).pipe(
      map(res => this._filterEvent(res)),
      catchError(err => this._handleError(err))
    );
  }

  upload(url: string, body: Object): Observable<any> {
    return this._http.post(url, body, this._headersUpload()).pipe(
      map(res => this._filterEvent(res)),
      catchError(err => this._handleError(err))
    );
  }

}
