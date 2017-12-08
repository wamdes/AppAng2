import {Component, Input, OnInit} from '@angular/core';

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
    items: [
      {
        title: 'test',
        description: 'test',
        image: 'test.png'
      }
    ]
  };
  @Input('model') set model(value){
    this._model = value;
  };

  constructor() { }

  ngOnInit() {
  }
  get model(){
    return this._model;
  }

}
