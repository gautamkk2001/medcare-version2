/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Profile_accinfoComponent } from './profile_accinfo.component';

describe('Profile_accinfoComponent', () => {
  let component: Profile_accinfoComponent;
  let fixture: ComponentFixture<Profile_accinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile_accinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile_accinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
