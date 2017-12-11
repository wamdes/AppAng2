import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html'
})

export class TooltipComponent implements OnInit {

  /**
   * variable to control open or close tooltip whose same name than type
   * @type: string
   */
  public _controlOpen;

  /**
   * Inputs of init tooltip
   */
  @Input('addClassGlobal') addClassGlobal: string;
  @Input('iconClose') iconClose: undefined|boolean = true;
  @Input('type') type: string;
  @Input('closeCallback') closeCallback;

  /**
   * Two dataBinding to open tooltip | Input
   * @param value
   */
  @Input('open') set open(value) {
    this._controlOpen = value;
  };

  /**
   * Two dataBinding to open tooltip | Output
   * @type {EventEmitter}
   */
  @Output('openChange') openChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * close tooltip
   */
  close() {

    if (this.closeCallback) {
      this.closeCallback();
    }
    this._controlOpen = null;
    this.openChange.emit(this._controlOpen);

  }
}
