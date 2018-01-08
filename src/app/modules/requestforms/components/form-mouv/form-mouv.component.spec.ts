/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormMouvComponent } from './form-mouv.component';

describe('FormMouvComponent', () => {
  let component: FormMouvComponent;
  let fixture: ComponentFixture<FormMouvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMouvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMouvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
