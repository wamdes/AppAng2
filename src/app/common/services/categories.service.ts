import { Injectable } from '@angular/core';
import {ConnectionBackofficeService} from "./connection-backoffice.service";
import {current} from "codelyzer/util/syntaxKind";

@Injectable()
export class CategoriesService {
  public categorie;
  public menuList;


  constructor(private linkBO: ConnectionBackofficeService) {
    this.linkBO.getMenuListForms().subscribe(
      success => {
        this.categorie = success.catalogue.services.reduce(( final, current ) => {
            let { Categorie, SubCategorie } = current;
            if (!final[Categorie]) final[Categorie] = {};
            if (!final[Categorie][SubCategorie]) final[Categorie][SubCategorie] = [];
            final[Categorie][SubCategorie].push(current);
            return final;
          }, {});

        this.menuList = Object.keys(this.categorie).reduce((final, current) => {
          final['listNiv1'].push(current);
          if (!final['listNv2'][current]) final['listNv2'][current] = [];
          final['listNv2'][current] = Object.keys(this.categorie[current]);
          return final;
        }, {listNiv1: [], listNv2:{}});
        console.log(Date.now(), this.categorie, this.menuList);
      },
      error => {
        console.warn(error);
      }
    );
  }

}
