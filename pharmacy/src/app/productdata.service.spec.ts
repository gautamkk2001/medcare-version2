/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductdataService } from './productdata.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Productdata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductdataService],
      imports:[HttpClientModule]
    });
  });

  it('should ...', inject([ProductdataService], (service: ProductdataService) => {
    expect(service).toBeTruthy();
  }));
});
