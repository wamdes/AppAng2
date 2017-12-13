/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpHandlerService } from './http-handler.service';

describe('HttpHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandlerService]
    });
  });

  it('should ...', inject([HttpHandlerService], (service: HttpHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
