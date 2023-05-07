/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Profile_mywishlistComponent } from './profile_mywishlist.component';

describe('Profile_mywishlistComponent', () => {
  let component: Profile_mywishlistComponent;
  let fixture: ComponentFixture<Profile_mywishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile_mywishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile_mywishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
