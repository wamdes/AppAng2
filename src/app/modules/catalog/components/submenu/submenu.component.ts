import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../common/services/store.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  private _popin;
  items = [
    {
      title: '@RISK INDUSTRIAL',
      description: 'Objet Ce service permet d\'exécuter l\'analyse de risque par simulation Monte Carlo pour vous montrer de nombreuses issues possibles dans votre modèle Excel — et vous indiquer la probabilité de chacune.',
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
  constructor(public stores: StoreService, private  _router: Router) { }
  pushStore(value) {
    this.stores.store = value;
    this.popin = 'panier';
    this._router.navigate(['/']);
    return this.stores.find(value.id);

  }

  get popin() {
    return this._popin;
  }

  set popin(value) {
    this._popin = value;
  }
  ngOnInit() {
  }
  goTo(url){
  let temp_url =  document.location.pathname;
  if(url!=="/checkout/form")
      this._router.navigate([temp_url+url]);
  else
  this._router.navigate([url]);
}

}
