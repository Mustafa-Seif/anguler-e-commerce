import { TestBed } from '@angular/core/testing';

import { CanDeactivatedGuard } from './can-deactivated.guard';

describe('CanDeactivatedGuard', () => {
  let guard: CanDeactivatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
