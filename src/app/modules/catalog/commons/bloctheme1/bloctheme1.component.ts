import { Component, Input, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { CommonModule } from '@angular/common';
import {SncfItems} from '../../../../common/interfaces/sncf-items';
import {ItemsService} from '../../../../common/services/items.service';
import {Paramnav} from '../../../../common/interfaces/paramnav';

@Component({
  selector: 'app-bloctheme1',
  templateUrl: './bloctheme1.component.html',
  styleUrls: ['./bloctheme1.component.css']
})
export class Bloctheme1Component implements OnInit {

  public ItemsList:SncfItems;
  public Cat:Set<any>;
  public Catlist;

  constructor(
    private http: Http,
    public getItems: ItemsService,

){}

public _param1: Paramnav;
public _param2: Paramnav;
@Input('param1') set param1(value) {
  switch(value){
      case "ferroviaire":
        this._param1 = "Services Ferroviaires"
      break;
    }
  //this._param1 = value
}
@Input('param2') set param2(value) {


switch(value){
    case "capacites":
      this._param1 = "SubCategorie"
      this._param2 = "Capacités"
    break;
    case undefined:
    this._param2 = this._param1
    this._param1 = "Categorie"
    break;




  }

}


	ngOnInit() {

    console.log(this._param2)
this.getItems.getItems(`${this._param1}`,`${this._param2}`).subscribe(res=> {

  this.ItemsList = res;
  this._param1
  this._param2
  let Cat = new Set()
  let Catlist
  res.forEach(function(v,i){
    Cat.add(v.SubCategorie);
  })
  this.Catlist = Array.from(Cat)
  //console.log(this.ItemsList)


})

    //return this.Catlist
    //this.ItemsList = res
  }
/**
*get
*
*/

//this.ItemsByCat = this.getItems().subscribe(res=>this.ItemsByCat=res);


//console.log("data :" +this.getItems().subscribe(data => {data}));

	 //console.log(my_cats)

  }
