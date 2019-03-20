import { TestBed } from '@angular/core/testing';

import { LogResponseInterceptorService } from './log-response-interceptor.service';

describe('LogResponseInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogResponseInterceptorService = TestBed.get(LogResponseInterceptorService);
    expect(service).toBeTruthy();
  });
});
