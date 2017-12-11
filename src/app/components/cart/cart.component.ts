import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../common/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public store: StoreService) { }

  ngOnInit() {
  }

}
