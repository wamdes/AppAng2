/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelephonieComponent } from './telephonie.component';

describe('TelephonieComponent', () => {
  let component: TelephonieComponent;
  let fixture: ComponentFixture<TelephonieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephonieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
