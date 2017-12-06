import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerroviaireComponent } from './ferroviaire.component';

describe('FerroviaireComponent', () => {
  let component: FerroviaireComponent;
  let fixture: ComponentFixture<FerroviaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerroviaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerroviaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
