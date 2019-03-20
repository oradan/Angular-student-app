import { TestBed } from '@angular/core/testing';

import { AaddHeaderInterceptorsService } from './aadd-header-interceptors.service';

describe('AaddHeaderInterceptorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AaddHeaderInterceptorsService = TestBed.get(AaddHeaderInterceptorsService);
    expect(service).toBeTruthy();
  });
});
