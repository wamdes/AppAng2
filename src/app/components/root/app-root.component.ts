import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent {
  public quickView = {
    title: 'QUICKVIEW',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat,
      leo aliquet euismod cursus, orci nibh dictum leo toere nodd la reccutega.`
  };
  public back = {
    link: 'catalogue',
    title: 'CATALOGUE'
  };
  public menuList1 = [
    {
      title: 'FERROVIAIRE',
      link: 'catalogue/ferroviaire',
      subtitles: [
        {
          title:'Capacité',
          link:'catalogue/ferroviaire/capacites'
      },
        {
          title:'circulation',
          link:'catalogue/ferroviaire/circulation'
        },
        {
          title:'Maintenance et ingenierie',
          link:'catalogue/ferroviaire'
        },
        {
          title:'infrasctructure',
          link:'catalogue/ferroviaire'
        }
      ],
      description: '',
      color : '#b6b7f5'
    },
    {
      title: 'FONCTIONS SUPPORT',
      link: 'catalogue/support',
      subtitles: [],
      description: '',
      color : '#b6b7f5'
    },
    {
      title: 'BUREAUTIQUE',
      link: 'catalogue/bureautique',
      subtitles: [],
      description: '',
      color : '#b6b7f5'
    },
    {
      title: 'EQUIPEMENT INFORMATIQUE',
      link: 'catalogue/equipement',
      subtitles: [],
      description: '',
      color : '#b6b7f5'
    },
    {
      title: 'TÉLÉPHONIE',
      link: 'catalogue/telephonie',
      subtitles: [],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat,
      leo aliquet euismod cursus, orci nibh dictum leo, vitae sollicitudin neque mi eget odio.
      Aliquam erat volutpat. Aliquam erat volutpat. Etiam consequat ligula vel nisi vehicula fringilla.`,
      color : '#b6b7f5'
    }];

    public menuList2 = [
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
}
