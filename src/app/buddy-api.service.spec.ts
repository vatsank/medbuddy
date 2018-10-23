import { TestBed, inject } from '@angular/core/testing';

import { BuddyAPIService } from './buddy-api.service';

describe('BuddyAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuddyAPIService]
    });
  });

  it('should be created', inject([BuddyAPIService], (service: BuddyAPIService) => {
    expect(service).toBeTruthy();
  }));
});
