import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private _menuList = [
    {
      title: 'FERROVIAIRE',
      link: 'catalogue/ferroviaire',
      subtitles: [],
      description: ''
    },
    {
      title: 'FONCTIONS SUPPORT',
      link: 'catalogue/support',
      subtitles: [],
      description: ''
    },
    {
      title: 'BUREAUTIQUE',
      link: 'catalogue/bureautique',
      subtitles: [],
      description: ''
    },
    {
      title: 'EQUIPEMENT INFORMATIQUE',
      link: 'catalogue/equipement',
      subtitles: [],
      description: ''
    },
    {
      title: 'TÉLÉPHONIE',
      link: 'catalogue/telephonie',
      subtitles: [],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, 
      leo aliquet euismod cursus, orci nibh dictum leo, vitae sollicitudin neque mi eget odio. 
      Aliquam erat volutpat. Aliquam erat volutpat. Etiam consequat ligula vel nisi vehicula fringilla.`
    },
    {
      title: 'Demandes de mouvements personnels',
      link: 'catalogue/securite',
      description: ''
    },
    {
      title: 'Demandes de reclamation',
      link: 'catalogue/securite',
      description: ''
    },
    {
      title: 'Demandes hors catalogue',
      link: 'catalogue/securite',
      description: ''
    }
  ];
  private _back = {
    link: 'catalogue',
    title: 'CATALOGUE'
  };
  private _quickView = {
    title: 'QUICKVIEW',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, 
      leo aliquet euismod cursus, orci nibh dictum leo toere nodd la reccutega.`
  };
  @Input('back') set back(value: { link: string; title: string }) {
    this._back = value;
  }
  @Input('menuList') set menuList(value) {
    this._menuList = value;
  }
  @Input('quickView') set quickView(value) {
    this._quickView = value;
  }

  constructor() { }

  ngOnInit() {
  }

  get menuList() {
    return this._menuList;
  }

  get quickView(): { title: string; description: string } {
    return this._quickView;
  }

  get back(): { link: string; title: string } {
    return this._back;
  }
}
