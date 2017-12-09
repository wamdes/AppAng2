
import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { CommonModule } from '@angular/common';


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
				return response.json().catalogue.services
			});
	}
	
	filtre(data){
		//console.log(data)
				
				let my_set = new Set();
				
				for(let i=0;i<data.length;i++){
						my_set.add(data[i].Categorie)
					}
				//console.log(my_set);
				return my_set
				//console.log(my_cats);
				
			}
	 
	 my_cats = this.getItems().subscribe(data => {return this.filtre(data)})
							
							
	ngOnInit() {
	
	 //console.log(my_cats)
	 return this.my_cats
  }
	
}