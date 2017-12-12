
import { Component, Input, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { CommonModule } from '@angular/common';
import {SncfItems} from '../../common/interfaces/sncf-items';

@Component({
  selector: 'app-ferroviaire',
  templateUrl: './ferroviaire.component.html',
  styleUrls: ['./ferroviaire.component.css']
})
export class FerroviaireComponent implements OnInit {

  //constructor() { }



  constructor(private http: Http){}
	getItems() {

        return this.http.get('assets/docs/FileServices.json')
			.map((response: Response) => {
				return response.json().catalogue.services.filter(services  =>services.Categorie==="Services Ferroviaires")

      });
	}


	ngOnInit() {
      this.getItems().subscribe(data => {return ItemsByCat = data)});
	 //console.log(my_cats)

  }

}
