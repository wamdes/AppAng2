import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  private _stores = [];

  constructor() { }

  public nbStore() {
    return this.stores.length;
  }

  public find(id) {
    return this._stores.find(item => item.id === id);
  }
  public delete(id) {
    this.stores = this._stores.filter( item => !(item.id === id) );
    return this.stores;
  }
  set store(value) {
    this._stores.push(value);
    this.stores = this._stores;
  }
  set stores(value) {
    this._stores = value;
  }
  get stores() {
    return this._stores;
  }
  drag(event, item) {
    event.dataTransfer.setData('item', item);
  }
  drop(event) {
    event.preventDefault();
    this.store = event.dataTransfer.getData('item');
  }
  allowDrop(event) {
    event.preventDefault();
  }
}
