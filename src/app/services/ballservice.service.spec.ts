import { TestBed } from '@angular/core/testing';

import { BallserviceService } from './ballservice.service';

describe('BallserviceService', () => {
  let service: BallserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BallserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
