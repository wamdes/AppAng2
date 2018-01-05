import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
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
  private count: undefined|any = {};
  private _open;
  @Input('model') set model(value){
    this._model = value;
  };
  /**
   * Two dataBinding to open pop-in | Input
   * @param value
   */
  @Input('open') set open(value) {
    this._open = value;
  };

  /**
   * Two dataBinding to open pop-in | Output
   * @type {EventEmitter}
   */
  @Output('openChange') openChange: EventEmitter<string> = new EventEmitter();

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
  get open(){
    return this._open;
  }
  public goTo(title) {
    if ( this.count[title] === 1 ) {
      this.count[title] = 0;
      let url = document.location.pathname + '/' + title.toString()
        .toLowerCase()
        .replace(/(é|è|ë|ê)/g, 'e')
        .replace(/(à|ã|ä|â)/g, 'a')
        .replace(/(î|ï)/g, 'i')
        .replace(/(ò|ö|ô)/g, 'o')
        .replace(/(u|ü|ù)/g, 'u')
        .replace(/ç/g, 'c')
        .replace(/(,|\.|\?|\!)/g, '')
        .replace(/\s/g, '-');
      this._router.navigate([`${/^\//.test(url) ? url : '/' + url}`]);
    } else {
      this.count[title]++;
      this.open = title;
      this.openChange.emit(this.open);
    }
  }

}
