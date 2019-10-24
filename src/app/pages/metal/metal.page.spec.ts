import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalPage } from './metal.page';

describe('MetalPage', () => {
  let component: MetalPage;
  let fixture: ComponentFixture<MetalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
