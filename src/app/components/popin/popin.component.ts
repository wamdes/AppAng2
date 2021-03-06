import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popin',
  templateUrl: './popin.component.html',
  styleUrls: ['./popin.component.scss']
})
export class PopinComponent implements OnInit {
  /**
   * variable to control open or close pop-in whose same name than type
   * @type: string
   */
  public _controlOpen;
  /**
   * Inputs of init pop-in
   */
  @Input('addClass') addClass: string;
  @Input('addClassGlobal') addClassGlobal: string;
  @Input('iconClose') iconClose: undefined|boolean = true;
  @Input('type') type: string;
  @Input('closeCallback') closeCallback;

  /**
   * Two dataBinding to open pop-in | Input
   * @param value
   */
  @Input('open') set open(value) {
      this._controlOpen = value;
  };

  /**
   * Two dataBinding to open pop-in | Output
   * @type {EventEmitter}
   */
  @Output('openChange') openChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * close pop-in
   */
  close() {
    if (this.closeCallback) {
      this.closeCallback();
    }
    this._controlOpen = null;
    this.openChange.emit(this._controlOpen);
  }
}
