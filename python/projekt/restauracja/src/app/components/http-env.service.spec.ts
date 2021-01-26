import { TestBed } from '@angular/core/testing';

import { HttpEnvService } from './http-env.service';

describe('HttpEnvService', () => {
  let service: HttpEnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpEnvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
