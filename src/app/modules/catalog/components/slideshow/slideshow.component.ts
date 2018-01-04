import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, OnDestroy {
  count;
  public diapos = {
    contents : [{img: '/assets/img/slideshow-mobile-01.jpg', desc: 'lalala1'}, {img: '/assets/img/slideshow-mobile-02.jpg', desc: 'lalala2'}, {img: '/assets/img/slideshow-mobile-03.jpg', desc: 'lalala3'}, {img: '/assets/img/slideshow-mobile-04.jpg', desc: 'lalala4'}],
    num:[ 1, 2, 3, 4]
  };

  constructor() { }

  ngOnInit() {
    (<any>window).slide = () => {
      this.count = 0;
      setInterval(() => {
        if (this.count === (this.diapos.contents.length - 1)){
          this.count = 0;
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
