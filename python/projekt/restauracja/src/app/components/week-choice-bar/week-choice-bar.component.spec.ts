import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekChoiceBarComponent } from './week-choice-bar.component';

describe('WeekChoiceBarComponent', () => {
  let component: WeekChoiceBarComponent;
  let fixture: ComponentFixture<WeekChoiceBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekChoiceBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekChoiceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
