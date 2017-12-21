import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class StoreService {

  private _stores = [];
  private _tmpItem;
  private _popin;

  constructor(private _router: Router) { }

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

  get tmpItem() {
    return this._tmpItem;
  }

  set tmpItem(value) {
    this._tmpItem = value;
    this._router.navigate(['/checkout/form']);
  }
  validate() {
    this.store = this.tmpItem;
    this.popin = 'panier';
    this._router.navigate(['/']);
  }
  deleteTmp(){
    this.tmpItem = null;
    this._router.navigate(['/']);
  }
  drag(event, item) {
    event.dataTransfer.setData('item', item);
  }
  drop(event) {
    event.preventDefault();
    this.tmpItem = event.dataTransfer.getData('item');
  }
  allowDrop(event) {
    event.preventDefault();
  }

  get popin() {
    return this._popin;
  }

  set popin(value) {
    this._popin = value;
  }
}
