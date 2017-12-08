import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  private _stores;

  constructor() { }

  public nbStore() {
    return this.stores.length;
  }

  set stores(value) {
    this._stores = value;
  }

  get stores() {
    return this._stores;
  }
}
