import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, OnDestroy {
  count;
  public diapos = {
    contents : [
      {img: '/assets/img/layer-1.png', title: 'TITRE 1 SUR UNE', subtitle: 'OU PLUSIEURS LIGNES', desc: 'Ce mois, partez a la decouverte ds classiques du roman noir...'},
      {img: '/assets/img/slider-2.jpg', title: 'TITRE 2 SUR UNE', subtitle: 'OU PLUSIEURS LIGNES', desc: 'choisissez l\'un de nos voyages rares actuellement à l\'affiche...'},
      {img: '/assets/img/train-3.jpg', title: 'TITRE 3 SUR UNE', subtitle: 'OU PLUSIEURS LIGNES', desc: 'Ce mois, partez a la decouverte ds classiques du roman noir...'},
      {img: '/assets/img/slider-2.jpg', title: 'TITRE 4 SUR UNE', subtitle: 'OU PLUSIEURS LIGNES', desc: 'Toutes vos envies seront désormais comblées avec nos meilleurs offres...'}
    ],
    num:[ 1, 2, 3, 4]
  };

  constructor() { }

  ngOnInit() {
    (<any>window).slide = () => {
      this.count = 1;
      setInterval(() => {
        console.log(this.diapos.contents.length - 1);
        if (this.count === (this.diapos.contents.length - 1))
        {
          this.count = 1;
        }else {
          ++this.count;
        }

      }, 3500);
    };
    (<any>window).slide();
  };
  ngOnDestroy() {
    clearInterval((<any>window).slide);
  }
}
