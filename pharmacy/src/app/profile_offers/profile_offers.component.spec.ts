/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Profile_offersComponent } from './profile_offers.component';

describe('Profile_offersComponent', () => {
  let component: Profile_offersComponent;
  let fixture: ComponentFixture<Profile_offersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile_offersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile_offersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
