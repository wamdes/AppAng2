/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormReclaComponent } from './form-recla.component';

describe('FormReclaComponent', () => {
  let component: FormReclaComponent;
  let fixture: ComponentFixture<FormReclaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReclaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
