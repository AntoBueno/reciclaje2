import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidrioPage } from './vidrio.page';

describe('VidrioPage', () => {
  let component: VidrioPage;
  let fixture: ComponentFixture<VidrioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidrioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
