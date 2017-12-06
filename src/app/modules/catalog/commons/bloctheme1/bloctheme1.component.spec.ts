import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloctheme1Component } from './bloctheme1.component';

describe('Bloctheme1Component', () => {
  let component: Bloctheme1Component;
  let fixture: ComponentFixture<Bloctheme1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloctheme1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloctheme1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
