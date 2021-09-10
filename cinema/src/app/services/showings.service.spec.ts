import { TestBed } from '@angular/core/testing';

import { ShowingsService } from './showings.service';

describe('ShowingsService', () => {
  let service: ShowingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
