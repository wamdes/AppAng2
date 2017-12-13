import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {SncfItems} from '../../common/interfaces/sncf-items';

@Injectable()
export class ItemsService {
constructor(private http: Http) { }


public ItemsList:SncfItems;
public Cat:Set<any>;
public Catlist;
public filtre:string;

public ref:string
  getItems(filtre,ref){

//console.log(filtre)


       return this.http.get('assets/docs/FileServices.json',{})
        .map((response: Response) =>response.json().catalogue.services.filter(services  =>services[`${filtre}`] ==`${ref}` ))
        //(services  =>services.SubCategorie==="Capacités"))


    }
}
