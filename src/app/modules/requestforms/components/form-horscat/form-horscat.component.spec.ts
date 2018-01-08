/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormHorscatComponent } from './form-horscat.component';

describe('FormHorscatComponent', () => {
  let component: FormHorscatComponent;
  let fixture: ComponentFixture<FormHorscatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHorscatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHorscatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
