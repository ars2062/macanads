import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewadsPage } from './newads.page';

describe('NewadsPage', () => {
  let component: NewadsPage;
  let fixture: ComponentFixture<NewadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
