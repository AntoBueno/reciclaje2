import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficometalPage } from './graficometal.page';

describe('GraficometalPage', () => {
  let component: GraficometalPage;
  let fixture: ComponentFixture<GraficometalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficometalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficometalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
