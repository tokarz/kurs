import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private readonly weeks = [];

  constructor(private readonly http: HttpClient) {


  }


  getWeeks() {
    for (let i = 0; i < 52; i++) {

      const days = [];
      for (let day = 0; day < 7; day++) {
        const currentDay = i * 7 + day + 1;
        const dayDate: Date = this.dateFromDay(2021, currentDay);

        const Day = {
          Date: dayDate.toString(),
          Number: currentDay
        }

        days.push(Day);
      }

      this.weeks.push({
        WeekNumber: i + 1,
        Days: days
      });
    }
  }

  getWeekNumberFromDate(date:Date) {
 
  }

  getDaysForWeek(week: number) {
    return this.weeks[week - 1];
  }

  hasPreviousWeek(week: number) {
    return week > 1;
  }

  hasNextWeek(week: number) {
    return week < 52;
  }

  private dateFromDay(year, day) {
    var date = new Date(year, 0); // initialize a date in `year-01-01`
    return new Date(date.setDate(day)); // add the number of days
  }
}
