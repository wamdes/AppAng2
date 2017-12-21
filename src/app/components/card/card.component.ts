import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from '../../common/services/store.service';
import {Router} from '@angular/router';
import {Model} from '../../common/interfaces/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public _model: Model;

  @Input('model') set model(value){
    this._model = value;
  };

  constructor(
    public stores: StoreService,
    private _router: Router
  ) { }

  pushStore(value) {
    this.stores.store = value;
    return this.stores.find(value.id);
  }
  ngOnInit() {
  }
  get model(){
    return this._model;
  }
  public goTo(title) {
    let url = document.location.pathname + '/' + title;
    this._router.navigate([`${/^\//.test(url) ? url : '/' + url}`]);
  }

}
