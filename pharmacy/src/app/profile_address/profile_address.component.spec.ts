/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Profile_addressComponent } from './profile_address.component';

describe('Profile_addressComponent', () => {
  let component: Profile_addressComponent;
  let fixture: ComponentFixture<Profile_addressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile_addressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile_addressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
