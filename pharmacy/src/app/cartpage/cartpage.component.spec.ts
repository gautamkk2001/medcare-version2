/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartpageComponent } from './cartpage.component';

describe('CartpageComponent', () => {
  let component: CartpageComponent;
  let fixture: ComponentFixture<CartpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
