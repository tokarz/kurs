import { TestBed } from '@angular/core/testing';

import { WeekChoiceService } from './week-choice.service';

describe('WeekChoiceService', () => {
  let service: WeekChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
