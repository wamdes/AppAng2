/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilarianeComponent } from './filariane.component';

describe('FilarianeComponent', () => {
  let component: FilarianeComponent;
  let fixture: ComponentFixture<FilarianeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilarianeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilarianeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
