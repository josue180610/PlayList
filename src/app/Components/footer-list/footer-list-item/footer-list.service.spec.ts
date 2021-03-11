import { TestBed } from '@angular/core/testing';

import { FooterListService } from './footer-list.service';

describe('FooterListService', () => {
  let service: FooterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
