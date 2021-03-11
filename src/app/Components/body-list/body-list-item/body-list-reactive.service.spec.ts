import { TestBed } from '@angular/core/testing';

import { BodyListReactiveService } from './body-list-reactive.service';

describe('BodyListReactiveService', () => {
  let service: BodyListReactiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyListReactiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
