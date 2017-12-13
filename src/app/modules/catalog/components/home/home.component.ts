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
  

  constructor() { }

  ngOnInit() {
  }

}
