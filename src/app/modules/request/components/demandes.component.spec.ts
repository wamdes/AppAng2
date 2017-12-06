/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemandesComponent } from './demandes.component';

describe('DemandesComponent', () => {
  let component: DemandesComponent;
  let fixture: ComponentFixture<DemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
