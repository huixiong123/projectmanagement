import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _langKey = 'localLang';

  constructor() {
  }

  setLocal(key, val) {
    localStorage.setItem(key, val);
  }

  setLocalObject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  getLocal(key) {
    return localStorage.getItem(key);
  }

  getLocalObject(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeLocal(key) {
    localStorage.removeItem(key);
  }

  clearLocal() {
    localStorage.clear();
  }

  setSession(key, val) {
    sessionStorage.setItem(key, val);
  }

  setSessionObject(key, obj) {
    sessionStorage.setItem(key, JSON.stringify(obj));
  }

  getSession(key) {
    return sessionStorage.getItem(key);
  }

  getSessionObject(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  removeSession(key) {
    sessionStorage.removeItem(key);
  }

  clearSession() {
    sessionStorage.clear();
  }

  setLang(val) {
    this.setLocal(this._langKey, val);
  }

  getLang() {
    return this.getLocal(this._langKey);
  }
}
