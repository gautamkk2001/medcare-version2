/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartpageService } from './cartpage.service';

describe('Service: Cartpage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartpageService]
    });
  });

  it('should ...', inject([CartpageService], (service: CartpageService) => {
    expect(service).toBeTruthy();
  }));
});
