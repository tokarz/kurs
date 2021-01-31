import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { CalendarDate } from '../model/CalendarDate';
import { WeekChoiceService } from './week-choice.service';

@Component({
  selector: 'app-week-choice-bar',
  templateUrl: './week-choice-bar.component.html',
  styleUrls: ['./week-choice-bar.component.scss']
})
export class WeekChoiceBarComponent implements OnInit {
  public weekNumber = 1;
  public faPreviousWeek = faChevronLeft;
  public faNextWeek = faChevronRight;
  public weekDays: Observable<Array<CalendarDate>>;

  @Input() selectedDate: CalendarDate = null;
  @Output() selectedDateChange = new EventEmitter<CalendarDate>();

  constructor(private readonly weekChoiceService: WeekChoiceService) { }

  ngOnInit(): void {
    this.weekDays = this.weekChoiceService.getWeekDays(this.weekNumber);
  }

  public goToWeek(direction: string) {
    if (direction === 'prev') {
      this.weekNumber -= 1;
      this.weekDays = this.weekChoiceService.getWeekDays(this.weekNumber).pipe()
    } else if (direction === 'next') {
      this.weekNumber += 1;
      this.weekDays = this.weekChoiceService.getWeekDays(this.weekNumber);
    }

  }

  public selectDate(weekDayName, weekDayNumber) {
    
    const newSelectedDate = {
      weekNumber: this.weekNumber,
      weekDay: weekDayName,
      weekDayNumber: weekDayNumber
    }

    this.selectedDate = newSelectedDate;

    this.selectedDateChange.emit(this.selectedDate);
  }
}
