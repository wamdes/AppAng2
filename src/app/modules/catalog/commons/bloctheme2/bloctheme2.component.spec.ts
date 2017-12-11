import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloctheme2Component } from './bloctheme2.component';

describe('Bloctheme2Component', () => {
  let component: Bloctheme2Component;
  let fixture: ComponentFixture<Bloctheme2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloctheme2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloctheme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
