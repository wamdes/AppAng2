import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../common/services/store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  items = [
    {
      title: 'Article 1',
      description: 'Texte de description',
      image: ''
    },
    {
      title: 'Article 2',
      description: 'Texte de description',
      image: ''
    },
    {
      title: 'Article 3',
      description: 'Texte de description',
      image: ''
    }
  ];
  constructor(private store: StoreService, private  _router: Router) { }

  ngOnInit() {
  }
  goTo(url){
      this._router.navigate([url]);
  }

}
