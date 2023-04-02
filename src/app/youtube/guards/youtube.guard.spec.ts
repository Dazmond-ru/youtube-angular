import { TestBed } from '@angular/core/testing';

import { YoutubeGuard } from './youtube.guard';

describe('YoutubeGuard', () => {
  let guard: YoutubeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(YoutubeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
