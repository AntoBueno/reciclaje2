import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticoPage } from './plastico.page';

describe('PlasticoPage', () => {
  let component: PlasticoPage;
  let fixture: ComponentFixture<PlasticoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasticoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
