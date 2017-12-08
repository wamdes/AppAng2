import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from "../../common/services/store.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public _model = {
    title: 'test',
    description: 'test',
    image: 'test.png',
    show: false,
    items: [
      {
        id: 1,
        title: 'test',
        description: 'test',
        image: 'test.png'
      }
    ]
  };
  @Input('model') set model(value){
    this._model = value;
  };

  constructor(private stores: StoreService) { }
  pushStore(value) {
    this.stores.store = value;
    return this.stores.find(value.id);
  }
  ngOnInit() {
  }
  get model(){
    return this._model;
  }

}
