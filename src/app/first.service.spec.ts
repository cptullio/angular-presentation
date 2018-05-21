import { TestBed, inject } from '@angular/core/testing';

import { FirstService } from './first.service';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('FirstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      
      providers: [FirstService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([FirstService], (service: FirstService) => {
    expect(service).toBeTruthy();
  }));
});
