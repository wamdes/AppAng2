import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../common/services/store.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public store: StoreService) { }

  ngOnInit() {
  }

}
