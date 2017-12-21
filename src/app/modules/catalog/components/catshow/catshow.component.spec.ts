/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CatshowComponent } from './catshow.component';

describe('CatshowComponent', () => {
  let component: CatshowComponent;
  let fixture: ComponentFixture<CatshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
