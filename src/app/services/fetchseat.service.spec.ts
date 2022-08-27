import { TestBed } from '@angular/core/testing';

import { FetchseatService } from './fetchseat.service';

describe('FetchseatService', () => {
  let service: FetchseatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchseatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
