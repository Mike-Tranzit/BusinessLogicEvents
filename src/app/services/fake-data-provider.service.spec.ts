import { TestBed } from '@angular/core/testing';

import { FakeDataProviderService } from './fake-data-provider.service';

describe('FakeDataProviderService', () => {
  let service: FakeDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
