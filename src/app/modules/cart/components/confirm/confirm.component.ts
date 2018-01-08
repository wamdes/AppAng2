import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private  _router: Router) { }

  ngOnInit() {
  }
  goTo(url){
  let temp_url =  document.location.pathname;
  if(url!=="/")
      this._router.navigate([temp_url+url]);
  else
  this._router.navigate([url]);
  }
}
