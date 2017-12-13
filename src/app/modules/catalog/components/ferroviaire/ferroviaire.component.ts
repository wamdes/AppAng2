
import { Component, Input, OnInit } from '@angular/core';

/*import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';*/
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-ferroviaire',
  templateUrl: './ferroviaire.component.html',
  styleUrls: ['./ferroviaire.component.css']
})
export class FerroviaireComponent implements OnInit {

  //constructor() { }

public param1:string;
public param2:string;

  constructor(private _router: Router){}


	ngOnInit() {
    let routes = this._router.url.split("/")
     this.param1 = routes[2]
    this.param2 = routes[3]

	 //console.log(this.param1+","+ this.param2)

  }

}
