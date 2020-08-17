import { TestBed } from '@angular/core/testing';

import { AllsongsService } from './allsongs.service';

describe('AllsongsService', () => {
  let service: AllsongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllsongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
