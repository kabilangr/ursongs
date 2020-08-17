import { TestBed } from '@angular/core/testing';

import { SearchlistService } from './searchlist.service';

describe('SearchlistService', () => {
  let service: SearchlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
