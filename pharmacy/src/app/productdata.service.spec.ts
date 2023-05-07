/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductdataService } from './productdata.service';

describe('Service: Productdata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductdataService]
    });
  });

  it('should ...', inject([ProductdataService], (service: ProductdataService) => {
    expect(service).toBeTruthy();
  }));
});
