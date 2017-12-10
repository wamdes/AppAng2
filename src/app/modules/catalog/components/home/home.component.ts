import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public items = [
    {
      title: 'test',
      description: 'test',
      image: 'test.png',
      show: false,
      items: [
        {
          id: 1,
          title: 'test',
          description: 'test',
          image: 'test.png'
        },
        {
          id: 2,
          title: 'test',
          description: 'test',
          image: 'test.png'
        },
        {
          id: 3,
          title: 'test',
          description: 'test',
          image: 'test.png'
        },
        {
          id: 4,
          title: 'test',
          description: 'test',
          image: 'test.png'
        },
        {
          id: 5,
          title: 'test',
          description: 'test',
          image: 'test.png'
        }
      ]
    },
    {
      title: 'test',
      description: 'test',
      image: 'test.png',
      show: false,
      items: [
        {
          id: 1,
          title: 'test',
          description: 'test',
          image: 'test.png'
        }
      ]
    },
    {
      title: 'test',
      description: 'test',
      image: 'test.png',
      show: false,
      items: [
        {
          id: 1,
          title: 'test',
          description: 'test',
          image: 'test.png'
        }
      ]
    },
    {
      title: 'test',
      description: 'test',
      image: 'test.png',
      show: false,
      items: [
        {
          id: 1,
          title: 'test',
          description: 'test',
          image: 'test.png'
        }
      ]
    },
    {
      title: 'test',
      description: 'test',
      image: 'test.png',
      show: false,
      items: [
        {
          id: 1,
          title: 'test',
          description: 'test',
          image: 'test.png'
        }
      ]
    }
  ];
  public quickView = {
    title: 'QUICKVIEW',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, 
      leo aliquet euismod cursus, orci nibh dictum leo toere nodd la reccutega.`
  };
  public back = {
    link: 'catalogue',
    title: 'CATALOGUE'
  };
  public menuList = [
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

  constructor() { }

  ngOnInit() {
  }

}
