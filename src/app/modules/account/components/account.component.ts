import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  UserAccount=
    {
      civilite : "Mme",
      nom:"NGOKO",
      Prenom:"Laure",
      Email:"ext.fdkhpod@dsjg",
      Login:"PlnO03",
      organisation:"sncf reseau",
      service:"mis",
      telmob:"XXXXXXXXXX",
      Adress: "92 avenue de france,75013 paris",
      photo:"assets/img/default.png"
   }

  Login=
    {
      login:"PLNO03801",
      mdp:"sqdfkjl",
    }

  InfoComp={
    role:"",
    corres:"",
    resp:""
  }
  constructor() { }

  ngOnInit() {
  }

}
