
import { Component, Input, OnInit } from '@angular/core';
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



  constructor(){}


	ngOnInit() {

	 //console.log(my_cats)

  }

}
