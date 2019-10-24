import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerplasticoPage } from './verplastico.page';

describe('VerplasticoPage', () => {
  let component: VerplasticoPage;
  let fixture: ComponentFixture<VerplasticoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerplasticoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerplasticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
