import { TestBed } from '@angular/core/testing';

import { AccountSkipTestsService } from './account.service';

describe('AccountSkipTestsService', () => {
  let service: AccountSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
