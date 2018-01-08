import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../common/services/store.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public store: StoreService, private  _router: Router) { }

  ngOnInit() {
  }
  goTo(url){
  let temp_url =  document.location.pathname;
  if(url!=="/mon-panier/confirm")
      this._router.navigate([temp_url+url]);
  else
  this._router.navigate([url]);
  }
}
