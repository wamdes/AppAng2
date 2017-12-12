import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { CommonModule } from '@angular/common';
import {SncfItems} from '../../../../common/interfaces/sncf-items';

@Component({
  selector: 'app-bloctheme1',
  templateUrl: './bloctheme1.component.html',
  styleUrls: ['./bloctheme1.component.css']
})
export class Bloctheme1Component implements OnInit {
  public ItemsList:SncfItems;
  public Cat:Set<any>
  public Catlist
  constructor(private http: Http){}

getItems(){
     return this.http.get('assets/docs/FileServices.json')
			.map((response: Response) =>response.json().catalogue.services.filter(services  =>services.Categorie==="Services Ferroviaires"))//(services  =>services.SubCategorie==="Capacités"))


}

	ngOnInit() {
    this.getItems().subscribe(res=> {
      this.ItemsList = res;
      let Cat = new Set()
      //let Catlist
      res.forEach(function(v,i){
        Cat.add(v.SubCategorie);
      })
      this.Catlist = Array.from(Cat)
      return this.Catlist
    //return this.Catlist
    //this.ItemsList = res
  }
);

//this.ItemsByCat = this.getItems().subscribe(res=>this.ItemsByCat=res);


//console.log("data :" +this.getItems().subscribe(data => {data}));

	 //console.log(my_cats)

  }







}
