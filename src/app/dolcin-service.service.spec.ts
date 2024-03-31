import { TestBed } from '@angular/core/testing';

import { DolcinServiceService } from './dolcin-service.service';

describe('DolcinServiceService', () => {
  let service: DolcinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolcinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
